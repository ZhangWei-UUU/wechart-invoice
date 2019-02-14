//index.js
//获取应用实例
const app = getApp()
const { $Message } = require('../../dist/base/index');
Page({
  data: {
    start: '上海',
    terminal: '北京',
    cost:200,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    wx.request({
      url: 'https://backend.funningcoin.cn/product/all', // 仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })

  },
  submit:function(){
    wx.request({
      url: 'https://backend.funningcoin.cn/product/all', // 仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
       
        if(res.data.success){
          $Message({
            content: '报销单已提交',
            type: 'success'
          });
        }else{
         
          $Message({
            content: '放弃吧，少年，跑不通的',
            type: 'error'
          });
          setTimeout(()=>{
            wx.navigateBack(
              {
                delta: 1, // 回退前 delta(默认为1) 页面
              }
            )
          },1500)
          
        }
      }
    })
  }
})
