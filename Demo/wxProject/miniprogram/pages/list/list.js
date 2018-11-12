// pages/list/list.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerUrl: [app.globalData.imgUrl+'525.png',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3420952540,720165732&fm=26&gp=0.jpg'
      , app.globalData.imgUrl+'welove1.png'
      ,'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540819652&di=1e551acc1ad05b11e182389f20a27766&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.g-photography.net%2Ffile_picture%2F11%2F11829%2F110568.jpg'],
    classList:[
      {url:'../../image/bicycle.png',name:"运动"},
      {url:'../../image/car.png',name:"汽车"},
      {url:'../../image/computed.png',name:"科技"},
      {url:'../../image/design.png',name:"设计"},
      {url:'../../image/map_img.png',name:"运动"},
      {url:'../../image/run.png',name:"极限"},
      {url:'../../image/bicycle.png',name:"自行车"},
      {url:'../../image/fei1.png',name:"飞机"},
      {url:'../../image/run.png',name:"冲浪"},
      {url:'../../image/bicycle.png',name:"运动"},
    ],
    showLeftBar:false,
    showMotai:false,//遮罩
    imgUrl: app.globalData.imgUrl,
    imgUrl_change: app.globalData.imgUrl_change,
    isShowAphorism:false,//作者介绍
    motail_top:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  // 关闭作者介绍
  colse_aphorism(){
    this.setData({
      showMotai: false,
      // isShowAphorism: false,
      motail_top:"margin-top:2000px;opacity: 0;"
    })
  },
  // touchstart(e){
  //   let _this=this
  //   let startX=e.changedTouches[0].clientX;
  //   let startY= e.changedTouches[0].clientY;
  //   console.log(startX, startY)
  //   if(startX<20){
  //     _this.setData({
  //     showLeftBar:true
  //   })
  //   setTimeout(function(){
  //     _this.setData({
  //       startX: startX,
  //       startY: startY
  //     })
  //   },100)
  //   }
  // },
  // touchmover(e){
  //   let startX=this.data.startX
  //   let startY=this.data.startY
  //   let touchMoveX = e.changedTouches[0].clientX;//滑动变化坐标
  //   let touchMoveY = e.changedTouches[0].clientY;//滑动变化坐标
  //   let moveX=touchMoveX-startX
  //   let moveY=touchMoveY-startY
  //   if(moveX>300){
  //     return;
  //   }
  //   this.setData({
  //     moveX:moveX,
  //     moveY:moveY
  //   })
  // },
  // touchend(){
  //   if(this.data.moveX<150){
  //     this.setData({
  //     startX:0,
  //     startY:0,
  //     moveX:0,
  //     moveY:0
  //   })
  //   }
  //   if(this.data.moveX>150){
  //     this.setData({
  //       moveX:300
  //     })
  //   }
  // },
  /**
   * 关闭左侧栏
   */
  closeLeft(){
    this.setData({
      showLeftBar: false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this;
    setTimeout(function(){
      that.setData({
        showMotai:true,
        isShowAphorism:true
      })
    },2000)
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