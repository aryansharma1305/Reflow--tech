import { callBackendAPI, API_CONFIG } from './api-config';

export interface AuthResponse {
  success: boolean;
  data?: {
    token?: string;
    user?: Record<string, unknown>;
  };
  error?: string;
  status?: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  name: string;
  password: string;
  contactNumber: string;
}

export const setAuthToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
  }
};

export const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token');
  }
  return null;
};

export const removeAuthToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
  }
};

export async function loginUser(credentials: LoginCredentials): Promise<AuthResponse> {
  try {
    if (!credentials.email || !credentials.password) {
      return {
        success: false,
        error: 'Email and password are required',
      };
    }

    const trimmedCredentials = {
      email: credentials.email.trim(),
      password: credentials.password,
    };

    const response = await callBackendAPI(API_CONFIG.ENDPOINTS.AUTH.LOGIN, {
      method: 'POST',
      body: trimmedCredentials,
      requireAuth: false,
    });
    const token = response.data?.data?.token || response.data?.token;
    const userData = response.data?.data || response.data;

    if (response.success && token) {
      setAuthToken(token);
      return {
        success: true,
        data: {
          token,
          ...userData,
        },
      };
    }

    const errorMessage = response.data?.message || 
                        response.data?.error || 
                        response.data?.data?.message ||
                        (typeof response.data === 'string' ? response.data : null) ||
                        (response.status === 401 ? 'Invalid email or password. Please check your credentials and try again.' : 'Login failed');
    
    return {
      success: false,
      error: errorMessage,
      status: response.status,
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Login failed',
    };
  }
}

export async function signupUser(data: SignupData): Promise<AuthResponse> {
  try {
    if (!data.name || !data.email || !data.password || !data.contactNumber) {
      return {
        success: false,
        error: 'Name, email, password, and contact number are required',
      };
    }

    const trimmedData = {
      ...data,
      email: data.email.trim(),
      contactNumber: data.contactNumber.trim(),
    };

    const response = await callBackendAPI(API_CONFIG.ENDPOINTS.AUTH.SIGNUP, {
      method: 'POST',
      body: trimmedData,
      requireAuth: false, // Signup doesn't require authentication token
    });

    console.log('Signup response:', {
      success: response.success,
      status: response.status,
      hasData: !!response.data,
      error: response.data?.message || response.data?.error,
    });

    if (response.success) {
      return {
        success: true,
        data: response.data?.data || response.data,
      };
    }

    const errorMessage = response.data?.message || 
                        response.data?.error || 
                        (response.status === 400 ? 'Invalid registration data' : 
                         response.status === 409 ? 'Email already exists' : 
                         'Signup failed');

    return {
      success: false,
      error: errorMessage,
      status: response.status,
    };
  } catch (error) {
    console.error('Signup error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Signup failed',
    };
  }
}

export async function generateOTP(email: string, action: 'signup' | 'login' = 'signup'): Promise<AuthResponse> {
  try {
    const response = await callBackendAPI(API_CONFIG.ENDPOINTS.AUTH.GENERATE_OTP, {
      method: 'POST',
      body: { email, action },
      requireAuth: false,
    });

    return {
      success: response.success,
      data: response.data?.data,
      error: response.success ? undefined : response.data?.message || 'Failed to generate OTP',
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate OTP',
    };
  }
}

export async function verifyOTP(email: string, verificationCode: string): Promise<AuthResponse> {
  try {
    const response = await callBackendAPI(API_CONFIG.ENDPOINTS.AUTH.VERIFY_OTP, {
      method: 'POST',
      body: { email, verificationCode },
      requireAuth: false,
    });

    const token = response.data?.data?.token || response.data?.token;
    const userData = response.data?.data || response.data;

    if (response.success && token) {
      setAuthToken(token);
      return {
        success: true,
        data: {
          token,
          ...userData,
        },
      };
    }

    return {
      success: false,
      error: response.data?.message || response.data?.error || 'OTP verification failed',
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'OTP verification failed',
    };
  }
}


export function logoutUser() {
  removeAuthToken();
  if (typeof window !== 'undefined') {
    window.location.href = '/login';
  }
}

export function isAuthenticated(): boolean {
  return getAuthToken() !== null;
}

