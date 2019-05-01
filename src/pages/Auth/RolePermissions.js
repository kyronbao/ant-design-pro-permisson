import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Checkbox, Button, message } from 'antd';

/* eslint react/no-multi-comp:0 */
@connect(({ permission, loading }) => ({
  permission,
  loading: loading.models.permission,
}))
class RolePermissions extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    const jsonId = this.props.location.params;

    dispatch({
      type: 'permission/fetchViaRole',
      payload: jsonId,
    });
  }

  render() {
    const {
      permission: { permissionsValues },
      permission: { currentPermissionsValues },
      loading,
      location,
      dispatch,
    } = this.props;

    let selectedPermissions = [];

    const CheckboxGroup = Checkbox.Group;

    function onChange(checkedValues) {
      console.log('checked = ', checkedValues);
      selectedPermissions = checkedValues;
    }

    function handleSubmit() {
      if(! location.params) {
        message.error('请重新选择角色编辑');
        return;
      }
      dispatch({
        type: 'permission/postViaRole',
        payload: {
          id: location.params.id,
          current_permissions: selectedPermissions,
        },
      });

    }

    return (
      <div>
        {
          loading ? <div>loading</div> : (
            <Card title="角色权限管理" bordered={false}>
              <CheckboxGroup options={permissionsValues} defaultValue={currentPermissionsValues} onChange={onChange} />
              <br /><br />
              <Button type="primary" onClick={handleSubmit}>提交</Button>
            </Card>
          )
        }
      </div>
    );
  }
}

export default RolePermissions;
