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


const menus = [
  {
    id: '1',
    name: 'roles management',
    path: 'admin/auth/roles',
    name_cn: '角色管理',
    icon: "table",
    parent: 0,
    sort: 0,
    guard: 'admin',
  },
  {
    id: '2',
    name: 'menus management',
    path: 'admin/auth/menus',
    icon: "table",
    parent: 0,
    sort: 0,
    name_cn: '权限管理',
    guard: 'admin',
  },

];

const menusPlus = menus.concat({
  id: '3',
  name: 'stuffs management',
  path: 'admin/auth/stuffs',
  name_cn: '员工管理',
  icon: "table",
  parent: 0,
  sort: 0,
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
  '/admin/auth/get-menus': {
    code: 20000,
    data: menus,
  },
  'POST /admin/auth/post-menus': {
    code: 20000,
    data: menusPlus
  },
  'GET /admin/auth/get-roles-via-stuff': {
    code: 20000,
    data: [{
      id: '2',
      name: 'coder',
    },],
  },
  'POST /admin/auth/post-roles-via-stuff': {
    code: 20000,
    data: [],
  },
};