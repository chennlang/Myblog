// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let data = []
  await db.collection('artice').doc(event._id).get()
  .then(res => {
    data = res.data
  })
  return data
}