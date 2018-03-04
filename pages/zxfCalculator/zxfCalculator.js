// pages/zxfCalculator/zxfCalculator.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ishave: ["有", "没有"],
    ishaveIndex: 0,
    zxfee: "",
    con:"",
    Biaodi:""
  },
  initData: function(){
    this.setData({
      zxfee: "",
      con:"",
      Biaodi:""
    });
  },

  bindIshaveChange: function(e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);
    this.setData({
      ishaveIndex: e.detail.value
    });
  },
  getBiaodi: function(e){
    console.log('Biaodi 发生选择改变，携带值为', e.detail.value)
    this.setData({
      Biaodi:e.detail.value
    });   
  },
    /**
   * 执行费计算
   */
  zxfCalculator: function(e){
    var Biaodi = this.data.Biaodi;
    this.setData({
      con: true
    });
    if (Biaodi == "") {
      this.setData({
        zxfee: "输入有误，请重新输入..."
      });
    } else if (Biaodi == 0) {
      this.setData({
        zxfee: 500
      });
    } else if (Biaodi > 0 && Biaodi <= 10000) {
      this.setData({
        zxfee: 50
      });
    } else if (Biaodi > 10000 && Biaodi <= 500000) {
      this.setData({
      zxfee: ((Biaodi - 10000) * 0.015 + 50)
      });
    } else if (Biaodi > 500000 && Biaodi <= 5000000) {
      this.setData({
      zxfee: ((Biaodi - 500000) * 0.01 + (500000 - 10000) * 0.015 + 50)
      });
    } else if (Biaodi > 5000000 && Biaodi <= 10000000) {
      this.setData({
      zxfee: ((Biaodi - 5000000) * 0.005 + (5000000 - 500000) * 0.01 + (500000 - 10000) * 0.015 + 50)
      });
    } else if (Biaodi > 10000000) {
      this.setData({
      zxfee: ((Biaodi - 10000000) * 0.001 + (10000000 - 5000000) * 0.005 + (5000000 - 500000) * 0.01 + (500000 - 10000) * 0.015 + 50)
      });
    } else {
      this.setData({
        zxfee: "输入有误，请重新输入..."
      });
    }
  }
})