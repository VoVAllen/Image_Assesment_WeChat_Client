// pages/result/result.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    server_result: "AI识别中",
    score_result:"您得到的分是5分",
    imgPath: app.globalData.imgPath,
  },
  backToUpload:function(){
    wx.redirectTo({
      url: '../upload/upload',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({})
    this.setData({
      imgPath: app.globalData.imgPath,
      server_result: app.globalData.s_text,
      score_result:app.globalData.score_result
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})