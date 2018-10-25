// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerUrl: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540221237891&di=b63634d9bf0652e4f60edeaba69d89b0&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dfb87b501e1c4b7452099bf55a7957462%2F42a98226cffc1e177b50bf194090f603738de92f.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3420952540,720165732&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1356772854,2896348204&fm=26&gp=0.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540819652&di=1e551acc1ad05b11e182389f20a27766&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.g-photography.net%2Ffile_picture%2F11%2F11829%2F110568.jpg'],
    classList:[
      {url:'../../image/bicycle.png',name:"运动"},
      {url:'../../image/car.png',name:"运动"},
      {url:'../../image/computed.png',name:"运动"},
      {url:'../../image/design.png',name:"运动"},
      {url:'../../image/fei1.png',name:"运动"},
      {url:'../../image/run.png',name:"运动"},
      {url:'../../image/bicycle.png',name:"运动"},
      {url:'../../image/fei1.png',name:"运动"},
      {url:'../../image/run.png',name:"运动"},
      {url:'../../image/bicycle.png',name:"运动"},
    ],
    showLeftBar:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  touchstart(e){
    let _this=this
    let startX=e.changedTouches[0].clientX;
    let startY= e.changedTouches[0].clientY;
    console.log(startX, startY)
    if(startX<20){
      _this.setData({
      showLeftBar:true
    })
    setTimeout(function(){
      _this.setData({
        startX: startX,
        startY: startY
      })
    },100)
    }
  },
  touchmover(e){
    let startX=this.data.startX
    let startY=this.data.startY
    let touchMoveX = e.changedTouches[0].clientX;//滑动变化坐标
    let touchMoveY = e.changedTouches[0].clientY;//滑动变化坐标
    let moveX=touchMoveX-startX
    let moveY=touchMoveY-startY
    if(moveX>300){
      return;
    }
    this.setData({
      moveX:moveX,
      moveY:moveY
    })
  },
  touchend(){
    if(this.data.moveX<150){
      this.setData({
      startX:0,
      startY:0,
      moveX:0,
      moveY:0
    })
    }
    if(this.data.moveX>150){
      this.setData({
        moveX:300
      })
    }
  },
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