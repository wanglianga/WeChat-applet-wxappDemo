// pages/page/order/order.js
Page({
  data:{
    logo_src:'../../img/addRess.png',
    orderInfo_name:'梵印陈品',
    orderInfo_view:'../../img/viewBig.jpg',
    orderInfoMsg_title:'【万人共修心经】心经抄经筒套装 配书法笔抄经仪轨临摹宣纸',
    orderCash_money:'68.00',
    orderCash_num:'1',
    orderDeliveryMsg_cash:'6.00',
    orderTotal_msg:'74.00',
    orderCashCash_msg:'68.00',
    orderCashPort_msg:'6.00',
    submitTotal_cash:'74.00',
    orderSupport_img:'../../img/chinaLife.png'
  },
  //事件处理函数
  toBuy:function(e){
    wx.navigateTo({
      url: '../pay/pay'
    })
  }
})