import { callBackendAPI, API_CONFIG } from '../api-config';
export interface Project {
  id: string;
  name: string;
  description?: string;
  organizationId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateProjectData {
  name: string;
  description?: string;
}

export interface ShareProjectData {
  userEmail: string;
  role: 'VIEWER' | 'EDITOR' | 'CREATOR';
}

export async function getAllProjects() {
  return callBackendAPI(API_CONFIG.ENDPOINTS.PROJECT.GET_ALL, {
    method: 'GET',
  });
}

export async function createProject(data: CreateProjectData) {
  return callBackendAPI(API_CONFIG.ENDPOINTS.PROJECT.CREATE, {
    method: 'POST',
    body: data as unknown as Record<string, unknown>,
  });
}

// Share project with a user
export async function shareProject(projectId: string, data: ShareProjectData) {
  return callBackendAPI(API_CONFIG.ENDPOINTS.PROJECT.SHARE(projectId), {
    method: 'POST',
    body: data as unknown as Record<string, unknown>,
  });
}

// Delete a project
export async function deleteProject(projectId: string) {
  return callBackendAPI(API_CONFIG.ENDPOINTS.PROJECT.DELETE(projectId), {
    method: 'DELETE',
  });
}

