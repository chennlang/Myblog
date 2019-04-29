// pages/addArticle/addArticle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    userName:'',
    des:'',
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  addArtice(){
    wx.cloud.callFunction({
      name: 'addArtice',
      data: {
        content: this.data.content,
        des: this.data.des,
        images: [],
        title: this.data.title,
        video: [],
        userName: this.data.userName
      }
    })
    .then(res =>{
      wx.showToast({
        title: 'add sucess',
      })
      wx.switchTab({
        url: '../index/index'
      })
    });
  },
   onJumpListPage (){
     this.addArtice()
  },
  userInput(e){
    let _this = this
    let name = e.currentTarget.dataset.name;
    let val = e.detail.value;
    _this.data[name] = val;
    _this.setData({
      name: _this.data[name]
    })
  }
})