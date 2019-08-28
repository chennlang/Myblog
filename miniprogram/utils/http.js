// 通用云函数请求
function requestCloudFucion(cloudFucionName, data) {
  return wx.cloud.callFunction({
    name: cloudFucionName,
    data: data
  })
}
// 普通请求
function requestBase(url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
function http(type = 'cloud', name, data) {
  if (type === 'cloud') return requestCloudFucion(name, data)
  if (type === 'ajax') return requestBase(name, data)
}
export default http