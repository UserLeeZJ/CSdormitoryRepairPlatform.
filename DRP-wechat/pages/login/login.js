// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sid:'请输入学号',
  },

  toRepair: function(e){
    if (this.data.sid ==="")
    {
      wx.showModal({
        title: '温馨提示',
        content: '学号不能为空',
      })
      return;
    }
    this.getUserStatus();
  },
  getUserStatus: function(){
    var that = this;
    console.log("学号: ",that.data.sid);
    wx.request({
      url: 'http://localhost:3000/register',
      method:'POST',
      data:that.data,
      success: function(res){
       // console.log("返回的消息"+JSON.stringify(res.data.msg));
       // console.log("返回的状态"+JSON.stringify(res.data.status));
        var msg = JSON.stringify(res.data.msg);
        var status = JSON.stringify(res.data.status);
        wx.showModal({
          title: '温馨提示',
          content: msg,
        });
        switch(status){
          case '0':
          console.log("跳转至");
           wx.switchTab({
            url:'/pages/repairs/repairs',
            success: function(e){
              console.log("跳转至")
            }
          })
          break;
          default: console.log("问题代码:",status);
        }

      }
    })
  }
  ,
  watchStudentId: function(e){
    let sid = e.detail.value;
    this.setData({
      sid: sid
    })
  },
  toRegister: function(){
    wx.navigateTo({
      url: "../register/register",
    })
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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