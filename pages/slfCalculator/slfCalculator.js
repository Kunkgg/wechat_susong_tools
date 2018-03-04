// pages/slfCalculator/slfCalculator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CaseType: [
      "财产案件",
      "离婚案件",
      "人格权侵权损害赔偿案件",
      "劳动争议案件",
      "行政案件",
      "案件管辖异议不成立",
      "其他非财产案件"
              ],
    CaseTypeIndex: 0,

    isornot:["是","否"],
    isornotIndex: 0,

    Biaodi: "",
    con: "",
    //财产案件受理费
    slfee: "",
    //离婚案件受理费
    lihunslfee: 300,
    //人格损害案件受理费
    rgqhslfee: 500,
    //劳动争议案件受理费
    ldvyslfee: 10,
    //行政案件受理费
    xzajslfee: 50,
    //其他案件受理费
    qtslfee: 100,
    err:false
  },
   /**
   * 数据初始化
   */
  initData: function() {
    console.log('数据变量重置...');
    this.setData({
      isornotIndex: 0,
      Biaodi: "",
      con: "",
      slfee: "",
      lihunslfee: 300,
      rgqhslfee: 500,
      err:false
    }); 
  },
  /**
   * 是否选择后数据重置
   */
  resetData: function() {
    console.log('数据变量重置...');
    this.setData({
      Biaodi: "",
      con: "",
      slfee: "",
      lihunslfee: 300,
      rgqhslfee: 500,
      err:false
    }); 
  },

    /**
   * 绑定案件类型
   */
  bindCaseTypeChange: function(e) {
    this.initData();
    console.log(
      'picker CaseType 发生选择改变，携带值为', e.detail.value);
    this.setData({
      CaseTypeIndex: e.detail.value
    }); 
  },
  /**
   * 绑定绑定离婚案件是否涉及财产分割
   */
  bindisornotChange: function(e){
    this.resetData();
    console.log(
      'picker isornot 发生选择改变，携带值为', e.detail.value);
    this.setData({
      isornotIndex: e.detail.value
    }); 
  },
  /**
   * 获取input金额
   */
  getBiaodi: function(e) {
    console.log(
      'picker Biaodi 发生选择改变，携带值为', e.detail.value);
    this.setData({
      Biaodi: e.detail.value
    }); 
  },

    /**
   * 财产案件受理费计算
   */
  slfCalculator: function(e){
    var Biaodi = this.data.Biaodi;
    this.setData({
      con: true
    });
    if (Biaodi == 0) {
      this.setData({
        con: false,
        err: true
      });
    } else if (Biaodi > 0 && Biaodi <= 10000){
      this.setData({
        slfee: 50
      });
    } else if (Biaodi > 10000 && Biaodi <= 100000){
      this.setData({
        slfee: ((Biaodi - 10000) * 0.025 + 50)
      });
    } else if (Biaodi > 100000 && Biaodi <= 200000){
      this.setData({
        slfee: ( (Biaodi - 100000) * 0.02 + 90000 * 0.025 + 50)
      });
    } else if (Biaodi > 200000 && Biaodi <= 500000){
      this.setData({
        slfee: ( (Biaodi - 200000) * 0.015 + 100000 * 0.02 + 90000 * 0.025 + 50)
      });
    } else if (Biaodi > 500000 && Biaodi <= 1000000){
      this.setData({
        slfee: ( (Biaodi - 500000) * 0.01 + 300000 * 0.015 + 100000 * 0.02 + 90000 * 0.025 + 50)
      });
    } else if (Biaodi > 1000000 && Biaodi <= 2000000){
      this.setData({
        slfee: ( (Biaodi - 1000000) * 0.009 + 500000 * 0.01 + 300000 * 0.015 + 100000 * 0.02 + 90000 * 0.025 + 50)
      });
    } else if (Biaodi > 2000000 && Biaodi <= 5000000){
      this.setData({
        slfee: ( (Biaodi - 2000000) * 0.008 + 1000000 * 0.009 + 500000 * 0.01 + 300000 * 0.015 + 100000 * 0.02 + 90000 * 0.025 + 50)
      });
    } else if (Biaodi > 5000000 && Biaodi <= 10000000){
      this.setData({
        slfee: ( (Biaodi - 5000000) * 0.007 + 3000000 * 0.008 + 1000000 * 0.009 + 500000 * 0.01 + 300000 * 0.015 + 100000 * 0.02 + 90000 * 0.025 + 50)
      });
    } else if (Biaodi > 10000000 && Biaodi <= 20000000){
      this.setData({
        slfee: ( (Biaodi - 10000000) * 0.006 + 5000000 * 0.007 + 3000000 * 0.008 + 1000000 * 0.009 + 500000 * 0.01 + 300000 * 0.015 + 100000 * 0.02 + 90000 * 0.025 + 50)
      });
    } else if (Biaodi > 20000000){
      this.setData({
        slfee: ( (Biaodi - 20000000) * 0.005 + 10000000 * 0.006 + 5000000 * 0.007 + 3000000 * 0.008 + 1000000 * 0.009 + 500000 * 0.01 + 300000 * 0.015 + 100000 * 0.02 + 90000 * 0.025 + 50)
      });
    } 
  },
   /**
   * 涉及财产分割离婚案件受理费
   */
  lihunslfCalculator: function(e) {
    var Biaodi = this.data.Biaodi;
    this.setData({
      con: true
    });
    if (Biaodi >= 0 && Biaodi <= 200000){
      this.setData({
        lihunslfee: 300
      });
    } else if (Biaodi > 200000){
      this.setData({
        lihunslfee: ((Biaodi - 200000) * 0.005 + 300)
      });
    } else {
      this.setData({
        err: true
      });
    }
  },
  /**
   * 人格损害案件受理费
   */
  rgshslfCalculator: function(e) {
    var Biaodi = this.data.Biaodi;
    this.setData({
      con: true
    });
    if (Biaodi >= 0 && Biaodi <= 50000){
      this.setData({
        con: true
      });
    } else if (Biaodi > 50000 && Biaodi <= 100000){
      this.setData({
        rgqhslfee: ((Biaodi - 50000) * 0.01 + 500)
      });
    } else if (Biaodi > 100000){
      this.setData({
        rgqhslfee: ((Biaodi - 100000) * 0.005 + 50000 * 0.01 + 500)
      });
    } else {
      this.setData({
        err: true
      });
    }
  }
})