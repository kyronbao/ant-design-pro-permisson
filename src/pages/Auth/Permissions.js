import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form } from 'antd';
import PermissionsForm from './PermissionsForm';


/* eslint react/no-multi-comp:0 */
@connect(({loading, permission }) => ({
  loading: loading.models.rule,
  permission
}))
@Form.create()
class Permissions extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'permission/fetch',
    });
  }

  render() {
    const {
      permission: { permission },
      form: { getFieldDecorator },
    } = this.props;

    return (
      <div>
        <Card title="权限管理" bordered={false}>
          {getFieldDecorator('members', {
            initialValue: permission,
          })(<PermissionsForm />)}
        </Card>
      </div>
    );
  }
}

export default Permissions;
