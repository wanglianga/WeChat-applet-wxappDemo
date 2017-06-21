// pages/page/info/info.js
var app = getApp();
Page({
  data:{
    userInfo:{},
  },
   onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      if(userInfo.gender=='1'){
      userInfo.gender='男'
      }
      if(userInfo.gender=='2'){
      userInfo.gender='女'
      }
      if(userInfo.gender=='0'){
       userInfo.gender='未知'
      }
      that.setData({
        userInfo:userInfo,
      })
    } 
    )
  }
})