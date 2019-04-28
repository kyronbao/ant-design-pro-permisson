// 代码中会兼容本地 service mock 以及部署站点的静态数据

const stuffs = [
  {
    id: '1',
    username: 'Jim',
    email: 'jim@qq.com',
  },
  {
    id: '2',
    username: 'Tom',
    email: 'tom@qq.com',
  },

];

const stuffsPlus = stuffs.concat({
  id: '3',
  username: 'Lucy',
  email: 'lucy@qq.com'
})
export default {
  // 支持值为 Object 和 Array
  'GET /admin/auth/stuff': {
    "data":{
      "username":"bbbb"
    }
  },
  'GET /admin/auth/get-stuffs': {
    code: 20000,
    data: stuffs,
  },
  'POST /admin/auth/post-stuffs': {
    code: 20000,
    data: stuffsPlus
  },
};
