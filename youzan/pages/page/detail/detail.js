// pages/page/detail/detail.js
Page({
  data:{
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    winHeight:'0',
    array:[{
      src:'../../img/show_list.jpg',

    },{
      src:'../../img/show_list.jpg'
    },{
      src:'../../img/show_list.jpg'
    },{
      src:'../../img/show_list.jpg'
    }],
    imgUrls: [
      '../../img/viewBig.jpg',
      '../../img/viewBig.jpg',
      '../../img/viewBig.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    view_title:'【万人共修心经】心经抄经筒套装 配书法笔抄经仪轨临摹宣纸',
    view_price:'￥68.00',
    port_rest:'518',
    port_number:'3079',
    choose_src:'../../img/buyStartHead.png',
    choose_name:'【颈椎救星】CabeauEV0系列记忆棉U型枕 正品保障 售后无忧',
    choose_price:'￥339.00',
    arrayChoose:[{
      info:'三角洲迷彩',
      id:'1',
      selected:false
    },{
      info:'低调灰',
      id:'2',
      selected:false
    },{
      info:'沉稳灰',
      id:'3',
      selected:false
    },{
      info:'千鸟格',
      id:'4',
      selected:false
    },{
      info:'粉丝带',
      id:'5',
      selected:false
    },{
      info:'法拉利红',
      id:'6',
      selected:false
    },{
      info:'文艺绿',
      id:'7',
      selected:false
    },{
      info:'萌熊猫',
      id:'8',
      selected:false
    },{
      info:'经典蓝',
      id:'9',
      selected:false
    },{
      info:'魅力红',
      id:'10',
      selected:false
    },{
      info:'矿石黑',
      id:'11',
      selected:false
    }],
    cNumber_rest:'8696',
    choose_class:'',
    next_class:'',
    shade_class:'',
    cType_class:'',
    buyNum_info:1
  },
  /*事件处理函数*/
   onLoad: function() {  
    var that = this;  
    /** 
     * 获取系统信息 
     */  
    wx.getSystemInfo( {  
      success: function( res ) {  
        that.setData( {  
          winHeight: res.windowHeight  
        });  
      }  
    });  
  },
  buyMsg:function(e){
    this.setData({
      choose_class:'buyChooseNew',
      next_class:'buyNextNew',
      shade_class:'chooseShadeNew'
    })
  },
   buyNext:function(e){
    wx.navigateTo({
      url: '../order/order'
    })
  },
  backto_index:function(e){
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
  },
  closeChoose:function(e){
    this.setData({
      choose_class:'',
      next_class:'',
      shade_class:''
    })
  },
  chooseType:function(e){
    var id = e.currentTarget.id, list = this.data.arrayChoose;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].selected = !list[i].selected
      } else {
        list[i].selected = false
      }
    }
    this.setData({
      arrayChoose:list
    });
  },
  del:function(e){
    var buyNum=this.data.buyNum_info;
    if(buyNum==1){
      this.setData({
        buyNum_info:1
      })
    }
    if(buyNum>1){
      buyNum=buyNum-1;
      this.setData({
        buyNum_info:buyNum
      })
    }
  },
  add:function(e){
    var buyNum=this.data.buyNum_info;
    buyNum=buyNum+1;
    this.setData({
      buyNum_info:buyNum
    })
  }
})