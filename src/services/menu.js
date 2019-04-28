import request from '@/utils/request';

export async function getMenuDataReal() {
  return request('/admin/auth/menu');
}


export async function getMenus() {
  return request(`/admin/auth/get-menus`);
}

export async function postMenus(params) {
  return request(`/admin/auth/post-menus`,
    {
      method: 'POST',
      body: {
        ...params,
        method: 'post',
      },
    }
  );
}