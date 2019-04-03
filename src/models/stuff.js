import { getStuffs, postStuffs } from '@/services/auth';
import { message } from 'antd';
import { ok } from '@/utils/errors'

export default {
  namespace: 'stuff',

  state: {
    list: [],
    roles: {},
  },

  effects: {

    *fetch(_, { call, put }) {
      const response = yield call(getStuffs);
      yield put({
        type: 'saveStuffs',
        payload: response.data,
      });
    },

    *post({ payload }, { call, put }) {
      const response = yield call(postStuffs, payload);
      if (response.code !== ok) {
        message.error('提交失败')
      }
      yield put({
        type: 'saveStuffs',
        payload: response.data,
      });
    },
  },

  reducers: {
    saveStuffs(state, action) {
      return {
        ...state,
        stuff: action.payload || {},
      };
    },
  },
};
