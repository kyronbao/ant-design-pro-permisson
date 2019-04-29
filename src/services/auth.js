import request from '@/utils/request';
import { stringify } from 'qs';

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

export async function getPermissionsViaRole() {
  return request(`/admin/auth/get-permissions-via-role`);
}

export async function postPermissionsViaRole(params) {
  return request(`/admin/auth/post-permissions-via-role`,
    {
      method: 'POST',
      body: {
        ...params,
        method: 'post',
      },
    }
  );
}

export async function getStuffs() {
  return request(`/admin/auth/get-stuffs`);
}

export async function postStuffs(params) {
  return request(`/admin/auth/post-stuffs`,
    {
      method: 'POST',
      body: {
        ...params,
        method: 'post',
      },
    }
  );
}

export async function getRolesViaStuff(params) {
  return request(`/admin/auth/get-roles-via-stuff?${stringify(params)}`);
}

export async function postRolesViaStuff(params) {
  return request(`/admin/auth/post-roles-via-stuffs`,
    {
      method: 'POST',
      body: {
        ...params,
        method: 'post',
      },
    }
  );
}

export async function postLogin(params) {
  return request(`/admin/auth/login`,
    {
      method: 'POST',
      body: {
        ...params,
        method: 'post',
      },
    }
  );
}

export async function postLogout(params) {
  return request(`/admin/auth/logout`,
    {
      method: 'POST',
      body: {
        ...params,
        method: 'post',
      },
    }
  );
}
