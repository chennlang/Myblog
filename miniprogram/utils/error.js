/**
 * 错误统一处理函数
 */
function handerError (msg) {
  wx.showToast({
    title: '出错了了哦' + msg,
    icon: 'none',
    duration: 2000
  })
}
export default {
  handerError
}