export default {
  '/admin/auth/get-roles': {
    code:20000,
    data: [
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
    ]
  },
  'POST /admin/auth/post-roles': {
    code:20000,
    data:[
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
      {
        id: '4',
        name: 'guest',
      },
    ]
  },
};