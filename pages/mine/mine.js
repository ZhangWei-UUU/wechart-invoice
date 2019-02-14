const { $Toast } = require('../../dist/base/index');

const app = getApp()

Page({
  data: {
     login:false
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  // 加载中函数
  handleLoading() {
    $Toast({
      content: '加载中',
      type: 'loading'
    });
  },
  onLoad: function () {
    this.handleLoading()
    var that = this;
    wx.login({
        success(res) {
          if (res.code) {
            wx.request({
                url: 'https://backend.funningcoin.cn/wx/login',
                data: {   
                  code: res.code
                },
                success(res) {
                    $Toast.hide();
                    console.log(res.data.result)
                    if(!res.data.result){
                        that.setData({
                           login:false
                        })
                    }else{
                        that.setData({
                            login:true
                        })
                    }
                },     
            },
            )
          } else {
            $Message({
                content: '登录失败:'+res.errMsg,
                type: 'error'
            });
          }
        }
    })
  }
})
