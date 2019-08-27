// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const res = await cloud.downloadFile({
    fileID: 'cloud://online-edv.6f6e-online-edv/mark_down/test.md'
  })
  const buffer = res.fileContent
  return buffer.toString('utf8')
}