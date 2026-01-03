# API Integration Documentation

This document describes the complete API integration for the ReFlow Technologies frontend application.

## Overview

The application is integrated with the ReFlow backend API (`https://reflow-backend.fly.dev/api/v1`) following the architecture:
- **Organizations**: One user = One organization
- **Projects**: Belong to organizations, can be shared with members
- **Devices**: Belong to projects, can be moved between projects
- **Users**: Have roles (OWNER, MEMBER) with different access levels

## Architecture Constraints

Based on the system architecture:

1. **One User = One Organization**: Each user belongs to exactly one organization
2. **One Device = One Project**: Each device belongs to exactly one project
3. **Owner Cannot Leave Without Transfer**: Organization owners must transfer ownership before leaving
4. **Cross-org Operations Forbidden**: Operations cannot span across organizations

## Authentication Flow

1. User authenticates via `/auth/user/login` or `/auth/user/signup`
2. JWT token is stored in localStorage
3. Token is automatically included in all API requests via `Authorization: Bearer {token}` header
4. Authorization is checked:
   - Organization Owner: Full access to all resources
   - Organization Member: Project-specific access (VIEWER, EDITOR, CREATOR)

## File Structure

```
src/
├── lib/
│   ├── api-config.ts          # Base API configuration and callBackendAPI helper
│   ├── auth.ts                 # Authentication functions (login, signup, OTP)
│   └── api/
│       ├── index.ts            # Centralized exports
│       ├── organization.ts     # Organization management APIs
│       ├── project.ts          # Project management APIs
│       └── device.ts           # Device management APIs
├── contexts/
│   └── AuthContext.tsx         # React context for auth state management
└── app/
    ├── api/
    │   └── contact/
    │       └── route.ts        # Contact form API (uses backend + email)
    ├── login/
    │   └── page.tsx            # Login page (integrated with API)
    └── register/
        └── page.tsx             # Register page (integrated with API)
```

## API Functions

### Authentication (`lib/auth.ts`)

- `loginUser(credentials)` - Login with email/password
- `signupUser(data)` - Register new user
- `generateOTP(email, action)` - Generate OTP for verification
- `verifyOTP(email, code)` - Verify OTP and get token
- `logoutUser()` - Clear token and redirect to login
- `isAuthenticated()` - Check if user is logged in
- `getAuthToken()` - Get current auth token
- `setAuthToken(token)` - Store auth token
- `removeAuthToken()` - Remove auth token

### Organization APIs (`lib/api/organization.ts`)

- `createOrganization(data)` - Create new organization
- `getOrganization()` - Get user's organization details
- `inviteUserToOrganization(data)` - Invite user to organization
- `removeMemberFromOrganization(memberId)` - Remove member (owner only)
- `leaveOrganization()` - Leave organization (members only)
- `transferOrganizationOwnership(data)` - Transfer ownership
- `getOrganizationActivities()` - Get activity log

### Project APIs (`lib/api/project.ts`)

- `getAllProjects()` - Get all projects in organization
- `createProject(data)` - Create new project
- `shareProject(projectId, data)` - Share project with user
- `deleteProject(projectId)` - Delete project (creator/owner only)

### Device APIs (`lib/api/device.ts`)

- `getProjectDevices(projectId)` - Get all devices in project
- `getDeviceDetails(deviceId)` - Get device details
- `createDevice(projectId, data)` - Create device in project
- `updateDevice(deviceId, data)` - Update device info
- `moveDevice(deviceId, data)` - Move device to another project
- `deleteDevice(deviceId)` - Delete device

## Usage Examples

### Using Authentication

```typescript
import { loginUser } from '@/lib/auth';
import { useAuth } from '@/contexts/AuthContext';

// In a component
const { isAuthenticated, logout } = useAuth();

// Login
const result = await loginUser({ email, password });
if (result.success) {
  // Token is automatically stored
  router.push('/dashboard');
}
```

### Using Organization APIs

```typescript
import { getOrganization, createOrganization } from '@/lib/api/organization';

// Get organization
const response = await getOrganization();
if (response.success) {
  const org = response.data.data.organization;
}

// Create organization
const response = await createOrganization({
  name: 'My Organization',
  description: 'Description here'
});
```

### Using Project APIs

```typescript
import { getAllProjects, createProject } from '@/lib/api/project';

// Get all projects
const response = await getAllProjects();
if (response.success) {
  const projects = response.data.data.projects;
}

// Create project
const response = await createProject({
  name: 'My Project',
  description: 'Project description'
});
```

### Using Device APIs

```typescript
import { getProjectDevices, createDevice } from '@/lib/api/device';

// Get devices in project
const response = await getProjectDevices(projectId);
if (response.success) {
  const devices = response.data.data.devices;
}

// Create device
const response = await createDevice(projectId, {
  serialNumber: 'AX601',
  subscriptionKey: 'key-here',
  name: 'Temperature Sensor',
  description: 'IoT device'
});
```

## API Response Format

All API functions return a consistent format:

```typescript
{
  success: boolean;
  data?: any;        // Response data from backend
  error?: string;    // Error message if failed
  status?: number;   // HTTP status code
}
```

## Environment Variables

Add to `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=https://reflow-backend.fly.dev/api/v1
NEXT_PUBLIC_EMAIL_PASS2=your-zoho-email-password
```

## Authentication Context

The `AuthProvider` wraps the entire application in `layout.tsx` and provides:

- `isAuthenticated`: Boolean indicating auth status
- `token`: Current auth token
- `login(token)`: Set auth token
- `logout()`: Clear auth and redirect
- `loading`: Initial auth check status

Use the `useAuth()` hook in any component:

```typescript
import { useAuth } from '@/contexts/AuthContext';

function MyComponent() {
  const { isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <div>Please login</div>;
  }
  
  return <button onClick={logout}>Logout</button>;
}
```

## Automatic Token Management

The `callBackendAPI` function automatically:
1. Retrieves token from localStorage if not provided
2. Adds `Authorization: Bearer {token}` header to all requests
3. Handles JSON and non-JSON responses
4. Returns consistent error format

## Error Handling

All API functions handle errors gracefully:
- Network errors are caught and returned with error message
- HTTP errors (4xx, 5xx) are returned with status code
- Invalid responses are handled safely

## Next Steps

To complete the integration:

1. **Create Dashboard Page**: Display organization, projects, and devices
2. **Create Organization Management UI**: Allow creating/inviting members
3. **Create Project Management UI**: Allow creating/sharing projects
4. **Create Device Management UI**: Allow creating/managing devices
5. **Add Protected Routes**: Redirect unauthenticated users to login
6. **Add Role-Based UI**: Show/hide features based on user role

## Testing

Test API integration:

1. Register a new user
2. Login with credentials
3. Create an organization
4. Create a project
5. Add devices to project
6. Test sharing projects with other users
7. Test role-based access

