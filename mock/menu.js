export default {
  '/admin/auth/menu': {
    "code": 20000,
    "msg": "ok",
    "data": [
      {
        "path": "/dashboard",
        "name_cn": "Dashboard",
        "icon": "dashboard",
        "locale": "menu.dashboard",
        "children": [{
          "path": "/dashboard/analysis",
          "name_cn": "分析页",
          "exact": true,
          "locale": "menu.dashboard.analysis"
        }, {
          "path": "/dashboard/monitor",
          "name_cn": "监控页",
          "exact": true,
          "locale": "menu.dashboard.monitor"
        }, {
          "path": "/dashboard/workplace",
          "name_cn": "工作台",
          "exact": true,
          "locale": "menu.dashboard.workplace"
        }]
      },
      {
        "id": 1,
        "name": "auth management",
        "name_cn": "授权管理",
        "path": "/",
        "icon": null,
        "parent": 0,
        "children": [
          {
            "id": 2,
            "name": "stuffs management",
            "name_cn": "员工管理",
            "path": "auth/stuffs",
            "icon": null,
            "parent": 1
          },
          {
            "id": 3,
            "name": "roles management",
            "name_cn": "角色管理",
            "path": "auth/roles",
            "icon": null,
            "parent": 1
          },
          {
            "id": 4,
            "name": "permissions management",
            "name_cn": "权限管理",
            "path": "auth/permissions",
            "icon": null,
            "parent": 1
          },
          {
            "id": 5,
            "name": "menus management",
            "name_cn": "菜单管理",
            "path": "auth/menus",
            "icon": null,
            "parent": 1
          }
        ]
      },
      {
        "path": "/form",
        "icon": "form",
        "name_cn": "表单页",
        "locale": "menu.form",
        "children": [{
          "path": "/form/basic-form",
          "name_cn": "基础表单",
          "exact": true,
          "locale": "menu.form.basicform"
        }, {
          "path": "/form/step-form",
          "name_cn": "分步表单",
          "hideChildrenInMenu": true,
          "locale": "menu.form.stepform",
          "children": [{
            "path": "/form/step-form/info",
            "name_cn": "分步表单（填写转账信息）",
            "exact": true,
            "locale": "menu.form.stepform.info"
          }, {
            "path": "/form/step-form/confirm",
            "name_cn": "分步表单（确认转账信息）",
            "exact": true,
            "locale": "menu.form.stepform.confirm"
          }, {
            "path": "/form/step-form/result",
            "name_cn": "分步表单（完成）",
            "exact": true,
            "locale": "menu.form.stepform.result"
          }]
        }, {
          "path": "/form/advanced-form",
          "name_cn": "高级表单",
          "authority": ["admin", "user"],
          "exact": true,
          "locale": "menu.form.advancedform"
        }]
      }, {
        "path": "/list",
        "icon": "table",
        "name_cn": "列表页",
        "locale": "menu.list",
        "children": [{
          "path": "/list/table-list",
          "name_cn": "查询表格",
          "exact": true,
          "locale": "menu.list.searchtable"
        }, {
          "path": "/list/table-list-simple1",
          "name_cn": "查询表格简版1",
          "exact": true,
          "locale": "menu.list.searchtablesimple1"
        }, {
          "path": "/list/table-list-simple2",
          "name_cn": "查询表格简版2",
          "exact": true,
          "locale": "menu.list.searchtablesimple2"
        }, {
          "path": "/list/basic-list",
          "name_cn": "标准列表",
          "exact": true,
          "locale": "menu.list.basiclist"
        }, {
          "path": "/list/card-list",
          "name_cn": "卡片列表",
          "exact": true,
          "locale": "menu.list.cardlist"
        }, {
          "path": "/list/search",
          "name_cn": "搜索列表",
          "locale": "menu.list.searchlist",
          "children": [{
            "path": "/list/search/articles",
            "name_cn": "搜索列表（文章）",
            "exact": true,
            "locale": "menu.list.searchlist.articles"
          }, {
            "path": "/list/search/projects",
            "name_cn": "搜索列表（项目）",
            "exact": true,
            "locale": "menu.list.searchlist.projects"
          }, {
            "path": "/list/search/applications",
            "name_cn": "搜索列表（应用）",
            "exact": true,
            "locale": "menu.list.searchlist.applications"
          }]
        }]
      }, {
        "path": "/profile",
        "name_cn": "详情页",
        "icon": "profile",
        "locale": "menu.profile",
        "children": [{
          "path": "/profile/basic",
          "name_cn": "基础详情页",
          "exact": true,
          "locale": "menu.profile.basic"
        }]
      }, {
        "name_cn": "结果页",
        "icon": "check-circle-o",
        "path": "/result",
        "locale": "menu.result",
        "children": [{
          "path": "/result/success",
          "name_cn": "成功页",
          "exact": true,
          "locale": "menu.result.success"
        }, {
          "path": "/result/fail",
          "name_cn": "失败页",
          "exact": true,
          "locale": "menu.result.fail"
        }]
      }, {
        "name_cn": "异常页",
        "icon": "warning",
        "path": "/exception",
        "locale": "menu.exception",
        "children": [{
          "path": "/exception/403",
          "name_cn": "403",
          "exact": true,
          "locale": "menu.exception.not-permission"
        }, {
          "path": "/exception/404",
          "name_cn": "404",
          "exact": true,
          "locale": "menu.exception.not-find"
        }, {
          "path": "/exception/500",
          "name_cn": "500",
          "exact": true,
          "locale": "menu.exception.server-error"
        }]
      }, {
        "name_cn": "个人页",
        "icon": "user",
        "path": "/account",
        "locale": "menu.account",
        "children": [{
          "path": "/account/center",
          "name_cn": "个人中心",
          "locale": "menu.account.center",
          "children": []
        }, {
          "path": "/account/settings",
          "name_cn": "个人设置",
          "locale": "menu.account.settings",
          "children": []
        }]
      }
    ]
  }
};