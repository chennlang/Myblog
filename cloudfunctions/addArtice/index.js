const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();
function addData(reData){
  return db.collection('artice').add({
    // data 字段表示需新增的 JSON 数据
    data: {
      creatTime: Date.now(),
      main:{
        content: reData.content,
        des: reData.des,
        images: reData.images,
        title:reData.title,
        video:reData.video,
        userName:reData.userName
      },
      read:{

      }
    }
  })
}
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let _data;
  await addData(event).then(res => {
    _data = res.data
  });
  return _data;
}