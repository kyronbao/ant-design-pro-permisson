import React, { PureComponent, Fragment } from 'react';
import { Table, Button, Input, message, Popconfirm, Divider } from 'antd';
import isEqual from 'lodash/isEqual';
import { connect } from 'dva';
import styles from './style.less';
import router from 'umi/router';

@connect(({ stuff }) => ({
  stuff
}))
class StuffsForm extends PureComponent {
  index = 0;

  cacheOriginData = {};

  constructor(props) {
    super(props);

    this.state = {
      data: props.value,
      loading: false,
      /* eslint-disable-next-line react/no-unused-state */
      value: props.value,
    };
  }

  static getDerivedStateFromProps(nextProps, preState) {
    if (isEqual(nextProps.value, preState.value)) {
      return null;
    }
    return {
      data: nextProps.value,
      value: nextProps.value,
    };
  }

  editRoles = (id) => {
    router.replace({
      pathname: 'stuff-roles',
      params: {"id": id},
    })
  }

  remove(id) {
    const { data } = this.state;
    const { onChange } = this.props;
    const newData = data.filter(item => item.id !== id);
    this.setState({ data: newData });
    onChange(newData);
  }

  render() {
    const columns = [
      {
        title: '用户名',
        dataIndex: 'username',
        width: '20%',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                autoFocus
                placeholder="用户名"
              />
            );
          }
          return text;
        },
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        width: '20%',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                autoFocus
                placeholder="邮箱"
              />
            );
          }
          return text;
        },
      },

      {
        title: '操作',
        key: 'action',
        render: (text, record) => {
          const { loading } = this.state;
          if (!!record.editable && loading) {
            return null;
          }

          return (
            <span>
              <a onClick={e => this.editRoles(record.id)}>角色管理</a>
              <Divider type="vertical" />
              {/*<Popconfirm title="是否要删除此行？" onConfirm={() => this.remove(record.id)}>*/}
                {/*<a>删除</a>*/}
              {/*</Popconfirm>*/}
            </span>
          );
        },
      },
    ];

    const { loading, data } = this.state;

    return (
      <Fragment>
        <Table
          rowKey="id"
          loading={loading}
          columns={columns}
          dataSource={data}
          pagination={false}
          rowClassName={record => (record.editable ? styles.editable : '')}
        />

      </Fragment>
    );
  }
}

export default StuffsForm;
