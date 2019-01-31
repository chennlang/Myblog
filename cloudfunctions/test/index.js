// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
const _ = db.command;
// 云函数入口函数
exports.main = async (event, context) => {
  db.collection('userInFo').doc('W_9dBzxe6pOxy3uY').update({
    data: {
      last_id1: _.set(150)
    },
    success: res => {
      console.log(res)
    },
    fail: err => {
      console.log(err)
    }
  });
  return true;
}