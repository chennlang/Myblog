
// 获取临时图片地址，有限期默认一天
function getTemporaryUrl(){
  wx.cloud.getTempFileURL({
    fileList: ['cloud://runner.7275-runner/designImg/bicycle.png'
      , 'cloud://runner.7275-runner/designImg/user_bg2.png'
      , 'cloud://runner.7275-runner/designImg/525.png'
      , 'cloud://runner.7275-runner/designImg/welove1.png'
      , 'cloud://runner.7275-runner/change/aphorism.png'
      // , 'cloud://runner.7275-runner/change/principle.png'
    ],
    success: res => {
        
    },
    fail: err => {

    }
  });
}
module.exports = {
  getTemporaryUrl: getTemporaryUrl
} 