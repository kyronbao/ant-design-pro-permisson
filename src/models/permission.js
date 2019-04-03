import { getPermissions, postPermissions } from '@/services/auth';
import { message } from 'antd';
import { ok } from '@/utils/errors'

export default {
  namespace: 'permission',

  state: {
    list: [],
    roles: {},
  },

  effects: {

    *fetch(_, { call, put }) {
      const response = yield call(getPermissions);
      yield put({
        type: 'savePermissions',
        payload: response.data,
      });
    },

    *post({ payload }, { call, put }) {
      const response = yield call(postPermissions, payload);
      if (response.code !== ok) {
        message.error('提交失败')
      }
      yield put({
        type: 'savePermissions',
        payload: response.data,
      });
    },
  },

  reducers: {
    savePermissions(state, action) {
      return {
        ...state,
        permission: action.payload || {},
      };
    },
  },
};
