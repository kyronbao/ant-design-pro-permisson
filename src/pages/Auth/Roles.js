import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form } from 'antd';
import RolesForm from './RolesForm';


/* eslint react/no-multi-comp:0 */
@connect(({ role }) => ({
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
      role: { roles },
      form: { getFieldDecorator },
    } = this.props;
    console.log(this.props)

    return (
      <Card title="角色管理" bordered={false}>
        {getFieldDecorator('members', {
          initialValue: roles,
        })(<RolesForm />)}
      </Card>
    );
  }
}

export default Roles;
