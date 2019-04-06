import { routerRedux } from 'dva/router';
import {
  getPermissions,
  postPermissions,
  getPermissionsViaRole,
  postPermissionsViaRole
} from '@/services/auth';
import { message } from 'antd';
import { ok } from '@/utils/errors'

export default {
  namespace: 'permission',

  state: {
    permissions: [],
    permissionsValues: [],
    currentPermissionsValues: [],
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

    *fetchViaRole({ payload }, { call, put, all }) {
      const [response1, response2] = yield all([
        call(getPermissions),
        call(getPermissionsViaRole, payload)
      ]);
      if (response1.code !== ok) {
        message.error('加载失败')
      }
      const permissionsValues = [];
      response1.data.forEach((item) => (
        permissionsValues.push({label:item.name_cn, value:item.name})
      ));
      const currentPermissionsValues = [];
      response2.data.forEach((item) => (
        currentPermissionsValues.push(item.name)
      ));

      yield put({
        type: 'savePermissionsViaRole',
        payload: {
          permissionsValues: permissionsValues,
          currentPermissionsValues: currentPermissionsValues
        },
      });
    },

    *postViaRole({ payload }, { call, put }) {
      const response = yield call(postPermissionsViaRole, payload);
      if (response.code === ok) {
        message.success('提交成功')
      }
    },
  },

  reducers: {
    savePermissions(state, action) {
      return {
        ...state,
        permission: action.payload || {},
      };
    },
    savePermissionsViaRole(state, action) {
      return {
        ...state,
        permissionsValues: action.payload.permissionsValues,
        currentPermissionsValues: action.payload.currentPermissionsValues,
      };
    },
  },
};
