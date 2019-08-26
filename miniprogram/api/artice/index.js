import { utils } from '../../utils/index.js'
// 新增文章
function addArticle(data) {
  return utils.http('cloud', 'addArtice', data)
}
export {
  addArticle
}