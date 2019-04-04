import { queryRoles, postRoles, getRolesViaStuff } from '@/services/auth';
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

    *fetchViaStuff({ payload }, { call, put }) {
      const response = yield call(getRolesViaStuff, payload);
      if (response.code !== ok) {
        message.error('加载失败')
      }
      const news =[];
      response.data.forEach((item) => (
        news.push(item.name)
      ));

      yield put({
        type: 'saveRoles',
        payload: news,
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
