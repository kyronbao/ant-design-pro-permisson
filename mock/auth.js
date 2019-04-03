const roles = [
  {
    id: '1',
    name: 'projector',
  },
  {
    id: '2',
    name: 'coder',
  },
  {
    id: '3',
    name: 'designer',
  },
];

const rolesPlus = roles.concat({
  id: '4',
  name: 'guest',
})

const permissions = [
  {
    id: '1',
    name: 'get roles',
    path: 'admin/auth/get-roles',
    name_cn: '获取角色',
    guard: 'admin',
  },
  {
    id: '2',
    name: 'get permissions',
    path: 'admin/auth/get-permissions',
    name_cn: '获取权限',
    guard: 'admin',
  },

];

const permissionsPlus = permissions.concat({
  id: '3',
  name: 'get stuffs',
  path: 'admin/auth/get-stuffs',
  name_cn: '获取员工',
  guard: 'admin',
})

export default {
  '/admin/auth/get-roles': {
    code: 20000,
    data: roles,
  },
  'POST /admin/auth/post-roles': {
    code: 20000,
    data: rolesPlus
  },
  '/admin/auth/get-permissions': {
    code: 20000,
    data: permissions,
  },
  'POST /admin/auth/post-permissions': {
    code: 20000,
    data: permissionsPlus
  },
};