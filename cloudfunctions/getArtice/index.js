const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();
function getData(openid) {
  return db.collection('artice').where({
    
  }).get()
}
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let _data = []
  
  await getData(event.userInfo.openId).then(res => {
    _data = res.data });
  return _data;
}