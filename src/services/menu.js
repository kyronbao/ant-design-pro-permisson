import request from '@/utils/request';

export async function getMenuDataReal() {
  return request('/api/menu');
}