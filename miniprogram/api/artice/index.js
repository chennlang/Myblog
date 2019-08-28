import utils from '../../utils/index.js'
// 新增文章
function addArticle(data) {
  return utils.http('cloud', 'addArtice', data)
}
// 获取文章列表
function getArticeList () {
  return utils.http('cloud', 'getArtice', {})
}
// 获取文章详情
function getArticeDettail (data) {
  return utils.http('cloud', 'getArticeDetail', data)
}
export default {
  addArticle,
  getArticeList,
  getArticeDettail
}