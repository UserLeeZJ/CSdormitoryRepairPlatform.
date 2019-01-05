// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    student:{
      sid:'请输入8位学号',
      sname:'请输入您的姓名',
      sphone:'请输入手机号',
      sbedchamber:'请输入寝室号'
    }

  },
  submitRegistration: function(e){

    let { sid, sname, sphone, sbedchamber } = e.detail.value;
    if ( sid && this.checkSid(sid)) this.setData({sid:sid});
    else wx.showModal({
      title: '温馨提示',
      content: '学号格式不对',
    });
    if ( sname && this.checkSname(sname)) this.setData({ sname: sname });
    else wx.showModal({
      title: '温馨提示',
      content: '姓名输入有误',
    });
    if (sphone && this.checkSphone(sphone)) this.setData({ sphone: sphone });
    else wx.showModal({
      title: '温馨提示',
      content: '请提交正确的手机号码',
    });
    if (sbedchamber && this.checkSbedchamer(sbedchamber)) this.setData({ sbedchamber: sbedchamber });
    else wx.showModal({
      title: '温馨提示',
      content: '寝室号输入有误',
    });


  },
  checkSid: function(sid){
    var reg = /^[A-Za-z]{2}[0-9]{6}$/
    return reg.test(sid);
  },
  checkSname:function(sname){
    var reg = /^[\u4E00-\u9FA5]{2,5}$/;   /*学生姓名是2-5个汉字*/
    return reg.test(sname);     
  },
  checkSphone: function(sphone){
    var reg = /^[0-9]{11}$/;
    return reg.test(sphone)
  }
  ,
  checkSbedchamer: function(sbedchamber){
    var reg = /^[0-9]{3,5}$/;
    return reg.test(sbedchamber)
  }
  ,
  registered: function(){
    var that = this;

  }
  ,
  returnLogin: function(){
    this.setData({
      student: {
        sid: '请输入8位学号',
        sname: '请输入您的姓名',
        sphone: '请输入手机号',
        sbedchamber: '请输入寝室号'
      }
    })
    wx.navigateBack({
      url: "../login/login",
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