import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form } from 'antd';
import MenusForm from './MenusForm';


/* eslint react/no-multi-comp:0 */
@connect(({loading, menu }) => ({
  loading: loading.models.rule,
  menu
}))
@Form.create()
class Menus extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'menu/fetch',
    });
  }

  render() {
    const {
      menu: { menu },
      form: { getFieldDecorator },
    } = this.props;

    return (
      <div>
        <Card title="菜单管理" bordered={false}>
          {getFieldDecorator('members', {
            initialValue: menu,
          })(<MenusForm />)}
        </Card>
      </div>
    );
  }
}

export default Menus;
