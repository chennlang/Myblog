const app = getApp()
function isLogin () {
  return app.globalData.userInfo
}
export default {
  isLogin
}