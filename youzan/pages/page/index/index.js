//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    array: [{
      src: '../../img/display.jpg',
      title:'寻味云南文山，黑毛土猪三味香肠，鲜香回味',
      author:'寻找田野',
      num:'4546'
    }, {
      src: '../../img/display.jpg',
      title:'寻味云南文山，黑毛土猪三味香肠，鲜香回味',
      author:'寻找田野',
      num:'4546'
    },
    {
      src: '../../img/display.jpg',
      title:'寻味云南文山，黑毛土猪三味香肠，鲜香回味',
      author:'寻找田野',
      num:'4546'
    },{
      src: '../../img/display.jpg',
      title:'寻味云南文山，黑毛土猪三味香肠，鲜香回味',
      author:'寻找田野',
      num:'4546'
    },
    {
      src: '../../img/display.jpg',
      title:'寻味云南文山，黑毛土猪三味香肠，鲜香回味',
      author:'寻找田野',
      num:'4546'
    }],
  },
  //事件处理函数
  toShow:function(e){
    wx.navigateTo({
     url: '../detail/detail'
    })
  },
})
