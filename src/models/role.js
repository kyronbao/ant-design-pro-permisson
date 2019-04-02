import { queryRoles, postRoles } from '@/services/auth';
import { message } from 'antd';
import { ok } from '@/utils/errors'

export default {
  namespace: 'role',

  state: {
    list: [],
    roles: {},
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
