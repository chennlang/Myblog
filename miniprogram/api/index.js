// const app = getApp()
import { utils } from '../utils/index.js'
// 通用请求
function request (cloudFucionName, data) {
  console.log(utils)
  return wx.cloud.callFunction({
    name: cloudFucionName,
    data: data
  })
}
// 新增文章
function addArticle(data){
  const baseInfo = {
    title: 'title',
    des: 'this is dec'
  }
}
export default {
  addArticle
}
