const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    userImg: '../../image/user-unlogin.png',
    logged: false,
    nickName: '点击登录'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //已登录
    if (app.globalData.userInfo) {
      this.setData({
        userImg: app.globalData.userInfo.avatarUrl,
        nickName: app.globalData.userInfo.nickName + '的博客'
      })
    } else {
      //未登录
    }
  },
  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        userImg: e.detail.userInfo.avatarUrl,
        nickName: e.detail.userInfo.nickName + '的博客'
      })
    }
    if (e.detail.userInfo) { //授权
      const INFO = e.detail.userInfo;
      wx.cloud.callFunction({
        name:'login',
        data:{
          avatarUrl:INFO.avatarUrl,
          city:INFO.city,
          country:INFO.country,
          nikeName:INFO.nikeName,
          province:INFO.province,
          gender:INFO.gender
        },
        success: res =>{//登录成功
          console.log(res)
        },
        fail:err =>{//登录失败
          console.log(err)
        }
      })
    } else { //取消     
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})