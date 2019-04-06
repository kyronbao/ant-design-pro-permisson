import React, { PureComponent, Fragment } from 'react';
import { Table, Button, Input, message, Popconfirm, Divider } from 'antd';
import isEqual from 'lodash/isEqual';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './style.less';

@connect(({ role }) => ({
  role
}))
class RolesForm extends PureComponent {
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

  getRowByKey(id, newData) {
    const { data } = this.state;
    return (newData || data).filter(item => item.id === id)[0];
  }

  toggleEditable = (e, id) => {
    e.preventDefault();
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(id, newData);
    if (target) {
      // 进入编辑状态时保存原始数据
      if (!target.editable) {
        this.cacheOriginData[id] = { ...target };
      }
      target.editable = !target.editable;
      this.setState({ data: newData });
    }
  };

  newMember = () => {
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    newData.push({
      id: `NEW_${this.index}`,
      name: '',
      editable: true,
    });
    this.index += 1;
    this.setState({ data: newData });
  };

  submitData = () => {
    const { data } = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'role/post',
      payload: { "roles": data },
    });
  };

  remove(id) {
    const { data } = this.state;
    const { onChange } = this.props;
    const newData = data.filter(item => item.id !== id);
    this.setState({ data: newData });
    onChange(newData);
  }

  editPermissions = (id) => {
    router.replace({
      pathname: 'role-permissions',
      params: {"id": id},
    })
  };

  handleKeyPress(e, id) {
    if (e.id === 'Enter') {
      this.saveRow(e, id);
    }
  }

  handleFieldChange(e, fieldName, id) {
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(id, newData);
    if (target) {
      target[fieldName] = e.target.value;
      this.setState({ data: newData });
    }
  }

  saveRow(e, id) {
    e.persist();
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      if (this.clickedCancel) {
        this.clickedCancel = false;
        return;
      }
      const target = this.getRowByKey(id) || {};
      if (!target.name) {
        message.error('请填写完整成员信息。');
        e.target.focus();
        this.setState({
          loading: false,
        });
        return;
      }
      delete target.isNew;
      this.toggleEditable(e, id);
      const { data } = this.state;
      const { onChange } = this.props;
      onChange(data);
      this.setState({
        loading: false,
      });
    }, 500);
  }

  cancel(e, id) {
    this.clickedCancel = true;
    e.preventDefault();
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(id, newData);
    if (this.cacheOriginData[id]) {
      Object.assign(target, this.cacheOriginData[id]);
      delete this.cacheOriginData[id];
    }
    target.editable = false;
    this.setState({ data: newData });
    this.clickedCancel = false;
  }

  render() {
    const columns = [
      {
        title: '角色名',
        dataIndex: 'name',
        id: 'name',
        width: '20%',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                autoFocus
                onChange={e => this.handleFieldChange(e, 'name', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="角色名"
              />
            );
          }
          return text;
        },
      },

      {
        title: '操作',
        id: 'action',
        render: (text, record) => {
          const { loading } = this.state;
          if (!!record.editable && loading) {
            return null;
          }
          if (record.editable) {
            if (record.isNew) {
              return (
                <span>
                  <a onClick={e => this.saveRow(e, record.id)}>添加</a>
                  <Divider type="vertical" />
                  <Popconfirm title="是否要删除此行？" onConfirm={() => this.remove(record.id)}>
                    <a>删除</a>
                  </Popconfirm>
                </span>
              );
            }
            return (
              <span>
                <a onClick={e => this.saveRow(e, record.id)}>保存</a>
                <Divider type="vertical" />
                <a onClick={e => this.cancel(e, record.id)}>取消</a>
              </span>
            );
          }
          return (
            <span>
              <a onClick={e => this.toggleEditable(e, record.id)}>编辑</a>
              <Divider type="vertical" />
              <a onClick={e => this.editPermissions(record.id)}>权限管理</a>
              <Divider type="vertical" />
              <Popconfirm title="是否要删除此行？" onConfirm={() => this.remove(record.id)}>
                <a>删除</a>
              </Popconfirm>
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
        <Button
          style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
          type="dashed"
          onClick={this.newMember}
          icon="plus"
        >
          新增
        </Button>
        <Button
          type="primary"
          onClick={this.submitData}
        >
          提交
        </Button>
      </Fragment>
    );
  }
}

export default RolesForm;
