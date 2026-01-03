// Organization API functions
import { callBackendAPI, API_CONFIG } from '../api-config';

export interface Organization {
  id: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateOrganizationData {
  name: string;
  description?: string;
}

export interface InviteUserData {
  email: string;
  role: 'MEMBER' | 'OWNER';
}

export interface TransferOwnershipData {
  newOwnerId: string;
}

// Create a new organization
export async function createOrganization(data: CreateOrganizationData) {
  return callBackendAPI(API_CONFIG.ENDPOINTS.ORGANIZATION.CREATE, {
    method: 'POST',
    body: data as unknown as Record<string, unknown>,
  });
}

// Get user's organization details
export async function getOrganization() {
  return callBackendAPI(API_CONFIG.ENDPOINTS.ORGANIZATION.GET, {
    method: 'GET',
  });
}

// Invite a user to the organization
export async function inviteUserToOrganization(data: InviteUserData) {
  return callBackendAPI(API_CONFIG.ENDPOINTS.ORGANIZATION.INVITE, {
    method: 'POST',
    body: data as unknown as Record<string, unknown>,
  });
}

// Remove a member from the organization
export async function removeMemberFromOrganization(memberId: string) {
  return callBackendAPI(`/organization/member/${memberId}`, {
    method: 'DELETE',
  });
}

// Leave organization (members only)
export async function leaveOrganization() {
  return callBackendAPI(API_CONFIG.ENDPOINTS.ORGANIZATION.LEAVE, {
    method: 'POST',
  });
}

// Transfer organization ownership
export async function transferOrganizationOwnership(data: TransferOwnershipData) {
  return callBackendAPI(API_CONFIG.ENDPOINTS.ORGANIZATION.TRANSFER_OWNERSHIP, {
    method: 'POST',
    body: data as unknown as Record<string, unknown>,
  });
}

// Get organization activities
export async function getOrganizationActivities() {
  return callBackendAPI(API_CONFIG.ENDPOINTS.ORGANIZATION.ACTIVITIES, {
    method: 'GET',
  });
}

