const roles = [
  {
    id: '1',
    name: 'projector',
    name_cn: '项目经理',
  },
  {
    id: '2',
    name: 'coder',
    name_cn: '码农',
  },
  {
    id: '3',
    name: 'designer',
    name_cn: '设计师',
  },
];

const rolesPlus = roles.concat({
  id: '4',
  name: 'guest',
  name_cn: '游客',
})

const permissions = [
  {
    id: '1',
    name: 'get roles',
    path: 'admin/auth/get-roles',
    name_cn: '获取角色',
    guard_name: 'admin',
  },
  {
    id: '2',
    name: 'get permissions',
    path: 'admin/auth/get-permissions',
    name_cn: '获取权限',
    guard_name: 'admin',
  },

];

const permissionsPlus = permissions.concat({
  id: '3',
  name: 'get stuffs',
  path: 'admin/auth/get-stuffs',
  name_cn: '获取员工',
  guard_name: 'admin',
})


const menus = [
  {
    id: '1',
    name: 'auth management',
    path: '/auth',
    name_cn: '授权管理',
    icon: "user",
    parent: 0,
    sort: 0,
  },
  {
    id: '2',
    name: 'menus management',
    path: '/auth/menus',
    icon: "",
    parent: 1,
    sort: 0,
    name_cn: '菜单管理',
  },
  {
    id: '3',
    name: 'permissions management',
    path: '/auth/others',
    name_cn: '权限管理',
    icon: "",
    parent: 1,
    sort: 0,
  },

];

const menusPlus = menus.concat({
  id: '4',
  name: 'roles management',
  path: '/auth/roles',
  name_cn: '角色管理',
  icon: "",
  parent: 1,
  sort: 0,
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
  'GET /admin/auth/get-permissions-via-role': {
    code: 20000,
    data: [{
      id: '2',
      name: 'get permissions',
      path: 'admin/auth/get-permissions',
      name_cn: '获取权限',
      guard: 'admin',
    }],
  },
  'POST /admin/auth/post-permissions-via-role': {
    code: 20000,
    data: [],
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
  'POST /admin/auth/login': (req, res) => {
    const { password, username } = req.body;
    if (password === '12345678' && username === 'admin') {
      res.send({
        code: 20000,
      });
      return;
    }

    res.send({
      code: 11401,
    });
  },
  'POST /admin/auth/logout': (req, res) => {
    res.send({
      code: 20000,
    });
  },
};