import utils from '../../utils/index.js'
// 新增文章
function addArticle(data) {
  return utils.http('cloud', 'addArtice', data)
}
// 获取文章列表
function getArticeList () {
  return utils.http('cloud', 'getArtice', {})
}
export default {
  addArticle,
  getArticeList
}