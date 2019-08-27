// pages/accredit/accredit.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadArtcleDetail()
  },
  // 加载文章信息
  loadArtcleDetail () {
    const _ts = this;
    wx.cloud.callFunction({
      name: 'getMarkDown',
      data: {
      },
      success: res => {
        // 将markdown内容转换为towxml数据
        let data = app.towxml.toJson(res.result, 'markdown');
        // 设置文档显示主题，默认'light'
        data.theme = 'light';
        _ts.setData({
          article: data
        });
      },
      fail: err => {
        console.log(err)
      }
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})