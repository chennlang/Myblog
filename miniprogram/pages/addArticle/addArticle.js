// pages/addArticle/addArticle.js;
const app = getApp()
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
  addArtice() {
    app.http.addArticle({
      content: this.data.content,
      des: this.data.des,
      images: [],
      title: this.data.title,
      userName: this.data.userName,
      video: []
    }).then(res => {
      wx.showToast({
        title: '添加成功',
      })
      wx.switchTab({
        url: '../info/info'
      })
    });
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