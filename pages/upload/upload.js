//index.js
//获取应用实例
const app = getApp()
// const BASE_URL = "http://dl.vnvideogo.com:5000"
const BASE_URL = "https://dl.vnvideogo.com"
// const BASE_URL = "http://127.0.0.1"

Page({
  data: {
    loading: false,
    btn_disable: false,
    btn_text: "上传图片",
    path: "logo.jpg"
  },
  onLoad:function(){
    wx.showShareMenu({})
  },
  //事件处理函数
  upload_img: function (e) {
    var that = this
    console.log(e)
    this.setData({
      loading: true
    })
    wx.chooseImage({
      count: 1,
      success: res => {
        this.setData({
          path: res.tempFilePaths[0]
        })
        app.globalData.imgPath = res.tempFilePaths[0]
        this.setData({
          btn_disable: true,
          btn_text: "上传中"
        })
        wx.uploadFile({
          url: BASE_URL + '/get_dist',
          filePath: this.data.path,
          name: 'file',
          success: res => {
            console.log("upload success")
            console.log(res)
            var result_s=JSON.parse(res.data)
            app.globalData.s_text=result_s.text
            app.globalData.score_result=result_s.score
            wx.navigateTo({
              url: '../result/result',
            })
          },
          fail: res => {
            console.log("upload fail")
            wx.showModal({
              title: '上传失败',
              content: '上传失败！',
              showCancel:false
            })
          },
          complete: res => {
            this.setData({
              loading: false,
              btn_text:'上传图片',
              btn_disable: false
            })
          }
        })
      },
      complete: e => {
        this.setData({ loading: false })
      }
    })
  },
})