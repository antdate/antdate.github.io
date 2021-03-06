let config = {
  sdk: 'NIM_Web_SDK_v6.1.0',
  // 用户自定义的登录注册地址
  loginApi: "http://39.100.125.190:8080/user/login",
  registerApi: "http://39.100.125.190:8080/user/register",
  sendSmsApi: "http://39.100.125.190:8080/user/sendsms",
  loginUrl: '/login.html',
  registUrl: '/regist.html',
  homeUrl: '/',

  // 资源路径根目录，为了方便用户部署在二级以上URL路径上
  resourceUrl: 'http://yx-web.nos.netease.com/webdoc/h5',
  // 用户logo地址
  logo: './res/emoji/ajmd/ajmd010.png',
  // 默认用户头像
  defaultUserIcon: 'http://yx-web.nos.netease.com/webdoc/h5/im/default-icon.png',
  // 默认普通群头像
  defaultGroupIcon: 'http://yx-web.nos.netease.com/webdoc/h5/im/default-group.png',
  // 默认高级群头像
  defaultAdvancedIcon: 'http://yx-web.nos.netease.com/webdoc/h5/im/default-advanced.png',
  // 系统通知图标
  noticeIcon: 'http://yx-web.nos.netease.com/webdoc/h5/im/notice-icon.png',
  // 我的手机图标
  myPhoneIcon: 'http://yx-web.nos.netease.com/webdoc/h5/im/my-phone.png',
  // 本地消息显示数量，会影响性能
  localMsglimit: 36,
  useDb: false
}

const env = 'online'

let appConfig = {
  // 用户的appkey
  // 用于在web demo中注册账号异步请求demo 服务器中使用
  test: {
    appkey: '50c93e708c1250727b619a0887fde73e',
    postUrl: 'https://apptest.netease.im'
  },
  online: {
    appkey: '50c93e708c1250727b619a0887fde73e',
    postUrl: 'http://39.100.125.190:8080'
  }
}

config = Object.assign(config, appConfig[env])

export default config
