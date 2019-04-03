import request from '@/utils/request';

export async function queryRoles() {
  return request(`/admin/auth/get-roles`);
}

export async function postRoles(params) {
  return request(`/admin/auth/post-roles`,
    {
      method: 'POST',
      body: {
        ...params,
        method: 'post',
      },
    }
  );
}

export async function getPermissions() {
  return request(`/admin/auth/get-permissions`);
}

export async function postPermissions(params) {
  return request(`/admin/auth/post-permissions`,
    {
      method: 'POST',
      body: {
        ...params,
        method: 'post',
      },
    }
  );
}

