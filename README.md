<h1 align="center">Ant Design Pro Permission</h1>

## 项目说明

为[ant-design/ant-design-pro](http://github.com/ant-design/ant-design-pro)添加了权限管理（RBAC）的一些模板，目前实现了
- 员工列表展示
    - 员工角色管理
- 角色管理
    - 角色权限管理
- 权限管理
- 菜单管理

另外由于常用查询表格模板，官方的功能较多，我加了两个简化的版本
- 列表页
    - 查询表格简版1（删除了搜索筛选的展开功能）
    - 查询表格简版2（删除了搜索筛选的展开功能，配置的模态框去掉下一步功能）

> 感谢 ant-design-pro 组的贡献  
> 目前流程已经跑通，后端API我使用Laravel实现，代码在这里 [https://github.com/kyronbao/laravel-permission-api](https://github.com/kyronbao/laravel-permission-api)  
> 欢迎试用， star 支持 ❤️

## 截图
<img src="https://kyronbao-1259078525.cos.ap-guangzhou.myqcloud.com/ant-design-pro-permission/permission.png" />


## 使用

本地可以使用 `npm start` 启动，

调试API使用 `npm run start:no-mock`，约定 `/admin` 路由使用代理请求后端服务， config.js如下
```
proxy: {
    '/admin': {
      target: 'http://you-api-server/',
    },
  },
```
上线nginx相应配置
```
location /admin {
                proxy_pass http://you-api-server;
                proxy_set_header   X-Forwarded-Proto $scheme;
                proxy_set_header   Host              $http_host;
                proxy_set_header   X-Real-IP         $remote_addr;
        }
```

具体参考 [http://pro.ant.design/docs/getting-started-cn](http://pro.ant.design/docs/getting-started-cn)

## 一些细节
- 不同角色的菜单直接从后端获取，前端不需要验证
- 不同角色的权限可以在后端判断，所以登录时`authority`默认给了`admin`值（models/login.js:79） 
- post相关的接口都使用批量提交，减少了代码量
