// pages/page/myOrder/myOrder.js
Page({
  data:{
    //页面配置
    winWidth: 0,  
    winHeight: 0,  
    // tab切换  
    currentTab: 0,  
    array:[{
      addressTitle_name:'梵音诚品',
      myOrder_status:'交易关闭',
      addressInfo_num:'E4564564564564564',
      orderInfo_view:'../../img/viewBig.jpg',
      orderInfoMsg_title:'【万人共修心经】心经抄经筒套装 配书法笔抄经仪轨临摹宣纸',
      orderCash_money:'68.00',
      orderCash_num:'1',
      orderTotal_cash:'68.00'
    },{
      addressTitle_name:'梵音诚品',
      myOrder_status:'交易关闭',
      addressInfo_num:'E4564564564564564',
      orderInfo_view:'../../img/viewBig.jpg',
      orderInfoMsg_title:'【万人共修心经】心经抄经筒套装 配书法笔抄经仪轨临摹宣纸',
      orderCash_money:'68.00',
      orderCash_num:'1',
      orderTotal_cash:'68.00'
    },{
      addressTitle_name:'梵音诚品',
      myOrder_status:'交易关闭',
      addressInfo_num:'E4564564564564564',
      orderInfo_view:'../../img/viewBig.jpg',
      orderInfoMsg_title:'【万人共修心经】心经抄经筒套装 配书法笔抄经仪轨临摹宣纸',
      orderCash_money:'68.00',
      orderCash_num:'1',
      orderTotal_cash:'68.00'
    }]
  },
  onLoad: function() {  
    var that = this;  
    /** 
     * 获取系统信息 
     */  
    wx.getSystemInfo( {  
      success: function( res ) {  
        that.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
        });  
      }  
    });  
  },
  //滑动切换
  bindChange: function( e ) {  
  
    var that = this;  
    that.setData( { currentTab: e.detail.current });  
  
  }, 
  //点击切换
  swichNav: function( e ) {  
  
    var that = this;  
  
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
    }  
  },

  //跳转到完成交易页面
  toFinish:function(e){
    wx.navigateTo({
      url: '../finish/finish',
    })
  }  

})