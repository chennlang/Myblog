// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含
 * - 小程序端调用传入的 data
 * - 经过微信鉴权直接可信的用户唯一标识 openid 
 * 
 */
const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();
//查询已有的数据中openid是否存在
function getData(openid){
  return db.collection('userInFo').where({
      _openid:openid+''
    }).get()
}
//注册
function register(obj, last_id){
  return db.collection('userInFo').add({
    data: {
      ID:last_id+1,
      all_infor: {
        nikeName:obj.nikeName,
        gender:obj.gender,
        city:obj.city,
        province:obj.province,
        imgUrl: obj.avatarUrl,
        add_time: Date.parse(new Date())/1000
      }
    }
  })
}
//获取最后一位人的ID
function getLastId(){
  return db.collection('userInFo').where({
    ID:0
  }).get()
}
exports.main = async (event, context) => {
  let data;//是否存在该用户
  let _last_id;
  let has_login;
  let obj = event;
  await getData(event.userInfo.openId).then((res) =>{
    data = res.data;
  })
  if (data.length == 0){//未注册
    await getLastId().then( res =>{
    _last_id = res.data[0].last_id;
    })
    await register(obj, last_id).then(res =>{//注册成功
      db.collection('todos').where({
        ID:0
      }).update({ data: { last_id:_.inc(1)}})
    })
    has_login = false;
  }else{
    has_login = true;
  }
  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看
  return {
    data: data,
    has_login: has_login
  };
}