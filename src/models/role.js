import { queryRoles, postRoles, getRolesViaStuff, postRolesViaStuff } from '@/services/auth';
import { message } from 'antd';
import { ok } from '@/utils/errors'

export default {
  namespace: 'role',

  state: {
    roles: [],
    rolesValues: [],
    currentRolesValues: [],
  },

  effects: {

    *fetch(_, { call, put }) {
      const response = yield call(queryRoles);
      yield put({
        type: 'saveRoles',
        payload: response.code === ok ? response.data : []
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
      const rolesValues = [];
      response1.data.forEach((item) => (
        rolesValues.push({label:item.name, value:item.name})
      ));
      const currentRolesValues = [];
      response2.data.forEach((item) => (
        currentRolesValues.push(item.name)
      ));

      yield put({
        type: 'saveRolesViaStuff',
        payload: {rolesValues: rolesValues, currentRolesValues: currentRolesValues},
      });
    },

    *postViaStuff({ payload }, { call, put }) {
      const response = yield call(postRolesViaStuff, payload);
      if (response.code === ok) {
        message.success('提交成功')
      }
    },
},

  reducers: {
    saveRoles(state, action) {
      return {
        ...state,
        roles: action.payload,
      };
    },
    saveRolesViaStuff(state, action) {
      return {
        ...state,
        rolesValues: action.payload.rolesValues,
        currentRolesValues: action.payload.currentRolesValues,
      };
    },
  },
};
