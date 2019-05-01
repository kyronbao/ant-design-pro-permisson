import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Checkbox, Button, message } from 'antd';

/* eslint react/no-multi-comp:0 */
@connect(({ role, loading }) => ({
  role,
  loading: loading.models.role,
}))
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
      role: { rolesValues },
      role: { currentRolesValues },
      loading,
      location,
      dispatch,
    } = this.props;
    console.log(this.props)

    let selectedRoles = [];

    const CheckboxGroup = Checkbox.Group;

    function onChange(checkedValues) {
      console.log('checked = ', checkedValues);
      selectedRoles = checkedValues;
    }

    function handleSubmit() {
      console.log(selectedRoles)
      if(! location.params) {
        message.error('请从员工页面点击角色管理');
        return;
      }
      dispatch({
        type: 'role/postViaStuff',
        payload: {
          id: location.params.id,
          current_roles: selectedRoles,
        },
      });

    }

    return (
      <div>
        {
          loading ? <div>loading</div> : (
            <Card title="员工角色管理" bordered={false}>
              <CheckboxGroup options={rolesValues} defaultValue={currentRolesValues} onChange={onChange} />
              <br /><br />
              <Button type="primary" onClick={handleSubmit}>提交</Button>
            </Card>
          )
        }
      </div>

    );
  }
}

export default StuffRoles;
