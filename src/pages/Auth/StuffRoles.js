import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form, Checkbox, Button, message } from 'antd';

/* eslint react/no-multi-comp:0 */
@connect(({ role }) => ({
  role
}))
@Form.create()
class StuffRoles extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    const jsonId = this.props.location.params;

    dispatch({
      type: 'role/fetchViaStuff',
      payload: jsonId,
    });
  }

  render() {
    const {
      role: { role },
      location,
      dispatch,
    } = this.props;

    let currentRoles = [];

    const CheckboxGroup = Checkbox.Group;

    function onChange(checkedValues) {
      console.log('checked = ', checkedValues);
      currentRoles = checkedValues;
    }

    function handleSubmit() {
      console.log(currentRoles)
      if(! location.params) {
        message.error('请从员工页面点击角色管理');
        return;
      }
      dispatch({
        type: 'role/postViaStuff',
        payload: {
          id: location.params.id,
          current_roles: currentRoles,
        },
      });

    }

    return (

      <div>
        { role ? (
          <Card title="员工角色管理" bordered={false}>
            <CheckboxGroup options={role.roles} defaultValue={role.currentRoles} onChange={onChange} />
            <br /><br />
            <Button type="primary" onClick={handleSubmit}>提交</Button>
          </Card>
          ) : <div>loading</div> }

      </div>
    );
  }
}

export default StuffRoles;
