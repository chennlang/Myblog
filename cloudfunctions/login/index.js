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
    openid:openid
    }).get()
}
//注册
function register(obj, _openid, last_id){
  return db.collection('userInFo').add({
    data: {
      ID:last_id+1,
      openid: _openid,
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
//更新last_id
function addLastId(){
  return db.collection('userInFo').doc('W_z6VTxe6pOxy3q_').update({ data: { last_id: _last_id + 1 } })
}

var data;//是否存在该用户
var _last_id;//已存在的最后一位ID
var _msg;//调用返回信息
exports.main = async (event, context) => {  
  var obj = event;
  var _openid = event.userInfo.openId;
  await getData(_openid).then((res) =>{
    data = res.data;
  })
  if (data.length == 0){//未注册
    await getLastId().then( res =>{//获取最大的数字    
    _last_id = res.data[0].last_id;
    });
    await register(obj, _openid, _last_id).then(res =>{//注册成功       
    })
    await addLastId().then(res => {_msg="注册成功！"});//更新lastId成功后再返回
  }else{
    _msg = "你已经注册过了！"
  }
  return {
    userData: data,
    msg:_msg 
  };
}