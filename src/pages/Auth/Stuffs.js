import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form } from 'antd';
import StuffsForm from './StuffsForm';


/* eslint react/no-multi-comp:0 */
@connect(({loading, stuff }) => ({
  loading: loading.models.rule,
  stuff
}))
@Form.create()
class Stuffs extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'stuff/fetch',
    });
  }

  render() {
    const {
      stuff: { stuff },
      form: { getFieldDecorator },
    } = this.props;

    return (
      <div>
        <Card title="员工管理" bordered={false}>
          {getFieldDecorator('members', {
            initialValue: stuff,
          })(<StuffsForm />)}
        </Card>
      </div>
    );
  }
}

export default Stuffs;
