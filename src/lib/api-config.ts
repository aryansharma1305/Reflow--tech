export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://reflow-backend.fly.dev/api/v1',
  ENDPOINTS: {
    AUTH: {
      SIGNUP: '/auth/user/signup',
      LOGIN: '/auth/user/login',
      GENERATE_OTP: '/auth/user/generate/otp',
      VERIFY_OTP: '/auth/user/verify/otp',
    },
    ORGANIZATION: {
      CREATE: '/organization',
      GET: '/organization',
      INVITE: '/organization/invite',
      LEAVE: '/organization/leave',
      TRANSFER_OWNERSHIP: '/organization/transfer-ownership',
      ACTIVITIES: '/organization/activities',
    },
    PROJECT: {
      GET_ALL: '/projects',
      CREATE: '/project',
      SHARE: (projectId: string) => `/project/${projectId}/share`,
      DELETE: (projectId: string) => `/project/${projectId}`,
    },
    DEVICE: {
      GET_PROJECT_DEVICES: (projectId: string) => `/project/${projectId}/devices`,
      GET_DETAILS: (deviceId: string) => `/device/${deviceId}`,
      CREATE: (projectId: string) => `/project/${projectId}/device`,
      UPDATE: (deviceId: string) => `/device/${deviceId}`,
      MOVE: (deviceId: string) => `/device/${deviceId}/move`,
      DELETE: (deviceId: string) => `/device/${deviceId}`,
    },
    CONTACT: {
      CREATE: '/contact',
    },
    HEALTH: {
      CHECK: '/health',
    },
  },
};

function getAuthToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token');
  }
  return null;
}

export async function callBackendAPI(
  endpoint: string,
  options: {
    method?: string;
    body?: Record<string, unknown>;
    token?: string;
    requireAuth?: boolean;
  } = {}
) {
  const { method = 'GET', body, token, requireAuth = true } = options;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const authToken = token || (requireAuth ? getAuthToken() : null);
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`;
  }

  const config: RequestInit = {
    method,
    headers,
  };

  if (body && method !== 'GET') {
    config.body = JSON.stringify(body);
  }

  try {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;
    
    if (process.env.NODE_ENV === 'development') {
      const requestBody = body ? JSON.parse(JSON.stringify(body)) : undefined;
      console.log('API Request:', {
        url,
        method,
        headers: { ...headers, Authorization: headers['Authorization'] ? 'Bearer ***' : undefined },
        body: requestBody,
        bodyString: body ? JSON.stringify(body) : undefined,
      });
    }
    
    const response = await fetch(url, config);
    
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.log('API Response:', {
        url,
        status: response.status,
        statusText: response.statusText,
        data,
        ok: response.ok,
      });
    }
    
    // For non-OK responses, include the error data
    return {
      success: response.ok,
      data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    console.error('Backend API call error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      status: 0,
    };
  }
}

