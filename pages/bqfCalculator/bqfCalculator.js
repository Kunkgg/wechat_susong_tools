Page({
  data: {
    biaodi: "",
    bqfee:"",
    con: "",
    err: false
  },
  initData: function(){
    this.setData({
      biaodi: "",
      bqfee:"",
      con: false,
      err: false
    });
  },
  getBiaodi: function(e){
    this.setData({
      biaodi: e.detail.value
    });
    console.log(this.data.biaodi);
  },
   /**
   * 保全费计算
   */
  bqfCalculator: function(e){
    var Biaodi = this.data.biaodi;
    if (Biaodi >= 0 && Biaodi <= 1000 && Biaodi != "") {
      this.setData({
      con: true,
      bqfee: 30
      });
    } else if (Biaodi > 1000 && Biaodi <= 100000) {
      this.setData({
      con: true,
      err: false,
      bqfee: (Biaodi - 1000) * 0.01 + 30
      });
    } else if (Biaodi > 100000) {
      var temp = (Biaodi - 100000) * 0.005 + 1020;
      if (temp <= 5000){
        this.setData({
          con: true,
          err: false,
          bqfee: temp
        });
      } else {
        this.setData({
        con: true,
        err: false,
        bqfee: 5000
      });
      } 
    } else {this.setData({
      con: false,
      err: true,
      bqfee: "输入有误，请重新输入..."
      });
    }
  }
});