//app.js
App({
  onLaunch: function () {
    let that=this
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,//记录用户Id
      })
    }
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    //下载图片
    wx.cloud.getTempFileURL({
      fileList: ['cloud://runner.7275-runner/designImg/bicycle.png'
      , 'cloud://runner.7275-runner/designImg/user_bg2.png'
      , 'cloud://runner.7275-runner/designImg/525.png'
      , 'cloud://runner.7275-runner/designImg/welove1.png'
      ,'cloud://runner.7275-runner/change/aphorism.png'
      ],
      success: res => {
       
      },
      fail: err => {
       
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {

        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => { //这里就是获取头像啊,什么什么的地方
              // 可以将 res 发送给后台解码出 unionId
              that.globalData.userInfo = res.userInfo;
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {
          //未授权
          // wx.openSetting({
          //   success:function(res){

          //   }
          // })

        }
      }
    })
    
  },
  globalData: {
    imgUrl:'https://7275-runner-1257628781.tcb.qcloud.la/designImg/',//文件夹desimg
    imgUrl_change:'cloud://runner.7275-runner/change/',//文件夹change
    url:'sss',
    userInfo:''
  },
})
