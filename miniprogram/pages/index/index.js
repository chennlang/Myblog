//index.js
const app = getApp()

Page({
  data: {
    isShowLeft:false,
    leftWidth:0,
    cardList:[
      {
        title:'新的一天，新的开始',
        content:'Flex 中使用 justify-content, 规定项目之间的对其方法，如果要让最后一项向右边对齐，如下图显示的：'
      },
      {
        title: '自我规划！',
        content: 'Flex 中使用 justify-content, 规定项目之间的对其方法，如果要让最后一项向右边对齐，如下图显示的：'
      },
      {
        title: '编程艺术',
        content: 'Flex 中使用 justify-content, 规定项目之间的对其方法，如果要让最后一项向右边对齐，如下图显示的：'
      },
      {
        title: 'JavaScript',
        content: 'Flex 中使用 justify-content, 规定项目之间的对其方法，如果要让最后一项向右边对齐，如下图显示的：'
      },
      {
        title: 'canvas理解',
        content: 'Flex 中使用 justify-content, 规定项目之间的对其方法，如果要让最后一项向右边对齐，如下图显示的：'
      },
      {
        title: 'sss',
        content: 'Flex 中使用 justify-content, 规定项目之间的对其方法，如果要让最后一项向右边对齐，如下图显示的：'
      },
      {
        title: 'sss',
        content: 'Flex 中使用 justify-content, 规定项目之间的对其方法，如果要让最后一项向右边对齐，如下图显示的：'
      },
    ]
  },

  onLoad: function() {
    let that = this;
  },
  //页面卸载
  onUnload(){
   
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
  }
})
