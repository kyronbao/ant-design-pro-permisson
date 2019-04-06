import { queryRoles, postRoles, getRolesViaStuff, postRolesViaStuff } from '@/services/auth';
import { message } from 'antd';
import { ok } from '@/utils/errors'

export default {
  namespace: 'role',

  state: {
    role: {},
  },

  effects: {

    *fetch(_, { call, put }) {
      const response = yield call(queryRoles);
      yield put({
        type: 'saveRoles',
        payload: response.data,
      });
    },

    *post({ payload }, { call, put }) {
      const response = yield call(postRoles, payload);
      if (response.code !== ok) {
        message.error('提交失败')
      }
      yield put({
        type: 'saveRoles',
        payload: response.data,
      });
    },

    *fetchViaStuff({ payload }, { call, put, all }) {
      const [response1, response2] = yield all([
        call(queryRoles),
        call(getRolesViaStuff, payload)
      ]);
      if (response1.code !== ok) {
        message.error('加载失败')
      }
      const roles = [];
      response1.data.forEach((item) => (
        roles.push({label:item.name, value:item.name})
      ));
      const currentRoles = [];
      response2.data.forEach((item) => (
        currentRoles.push(item.name)
      ));

      yield put({
        type: 'saveRoles',
        payload: {roles: roles, currentRoles: currentRoles},
      });
    },

    *postViaStuff({ payload }, { call, put }) {
      const response = yield call(postRolesViaStuff, payload);
      if (response.code !== ok) {
        message.error('提交失败')
      }
      yield put({
        type: 'saveRoles',
        payload: response.data,
      });
    },
},

  reducers: {
    saveRoles(state, action) {
      return {
        ...state,
        role: action.payload || {},
      };
    },
  },
};
