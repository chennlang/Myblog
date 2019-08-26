//index.js
const app = getApp()

Page({
  data: {
    isShowLeft:false,
    leftWidth:0,
    navList:[
      {
        name:'所有',
        active:true
      },
      {
        name: '前端',
      },
      {
        name: '设计',
      },
      {
        name: '摄影',
      },
      {
        name: 'PS',
      },
      {
        name: '汽车',
      },
      ],
    cardList:[]
  },

  onLoad: function() {
    let that = this;
  },
  //页面卸载
  onUnload(){
   
  },
  onShow () {
    this.getArticeData()
  },
  //页面隐藏，后台
  onHide(){
    this.hideLeft();
  },
  showLeftBar(){
    this.setData({
      leftWidth: 400
    })
  },
  hideLeft(){
    this.setData({
      leftWidth: 0
    })
  },
  //阻止滚动穿透
  myCatchTouch(){
    return false;
  },
  //添加文章
  addArticle(){
    wx.navigateTo({
      url: '../addArticle/addArticle',
    })
  },
  getArticeData(){
    wx.cloud.callFunction({
      name: 'getArtice',
      data: {
      },
      success: res => {
        const newsList = res.result.reverse()
        newsList.forEach(m => {
          m.creatTime = wx.$tool.common.getTimeFormat(m.creatTime)
        })
        this.setData({
          cardList: newsList
        });
      },
      fail: err => {
        console.log(err)
      }
    });
  }
})
