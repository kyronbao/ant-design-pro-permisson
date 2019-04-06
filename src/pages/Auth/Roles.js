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
      role: { role },
      form: { getFieldDecorator },
    } = this.props;

    console.log(role);


    return (
      <div>
        {
          ! role.roles ? (
            <Card title="角色管理" bordered={false}>
              {getFieldDecorator('members', {
                initialValue: role,
              })(<RolesForm />)}
            </Card>
          ) : <div>loading</div>
        }

      </div>
    );
  }
}

export default Roles;
