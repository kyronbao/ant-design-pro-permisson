import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form } from 'antd';
import RolesForm from './RolesForm';


/* eslint react/no-multi-comp:0 */
@connect(({loading, role }) => ({
  loading: loading.models.rule,
  role
}))
@Form.create()
class Roles extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'role/fetch',
    });
  }

  render() {
    const {
      role: {role},
      form: { getFieldDecorator },
    } = this.props;

    return (
      <div>
        <Card title="角色管理" bordered={false}>
          {getFieldDecorator('members', {
            initialValue: role,
          })(<RolesForm />)}
        </Card>
      </div>
    );
  }
}

export default Roles;
