// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();

function getData(openid) {
  return db.collection('userInFo').where({
    openid: openid
  }).get()
}
// 云函数入口函数
exports.main = async (event, context) => {
  var _data;
  await getData(event.userInfo.openId).then(res => {_data=res});
  return {
    userInfor: _data
  }
}