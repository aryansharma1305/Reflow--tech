
import { callBackendAPI, API_CONFIG } from '../api-config';
export interface Device {
  id: string;
  serialNumber: string;
  subscriptionKey?: string;
  name: string;
  description?: string;
  projectId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateDeviceData {
  serialNumber: string;
  subscriptionKey: string;
  name: string;
  description?: string;
}

export interface UpdateDeviceData {
  name?: string;
  description?: string;
}

export interface MoveDeviceData {
  newProjectId: string;
}

export async function getProjectDevices(projectId: string) {
  return callBackendAPI(API_CONFIG.ENDPOINTS.DEVICE.GET_PROJECT_DEVICES(projectId), {
    method: 'GET',
  });
}

export async function getDeviceDetails(deviceId: string) {
  return callBackendAPI(API_CONFIG.ENDPOINTS.DEVICE.GET_DETAILS(deviceId), {
    method: 'GET',
  });
}

export async function createDevice(projectId: string, data: CreateDeviceData) {
  return callBackendAPI(API_CONFIG.ENDPOINTS.DEVICE.CREATE(projectId), {
    method: 'POST',
    body: data as unknown as Record<string, unknown>,
  });
}

export async function updateDevice(deviceId: string, data: UpdateDeviceData) {
  return callBackendAPI(API_CONFIG.ENDPOINTS.DEVICE.UPDATE(deviceId), {
    method: 'PUT',
    body: data as unknown as Record<string, unknown>,
  });
}

export async function moveDevice(deviceId: string, data: MoveDeviceData) {
  return callBackendAPI(API_CONFIG.ENDPOINTS.DEVICE.MOVE(deviceId), {
    method: 'POST',
    body: data as unknown as Record<string, unknown>,
  });
}
export async function deleteDevice(deviceId: string) {
  return callBackendAPI(API_CONFIG.ENDPOINTS.DEVICE.DELETE(deviceId), {
    method: 'DELETE',
  });
}

