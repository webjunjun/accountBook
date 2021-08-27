Component({
  data: {
    selected: 0,
    color: "#24c489",
    selectedColor: "#b693fe",
    list: [{
      pagePath: "/pages/addPlus/addPlus",
      iconPath: "/static/msg.png",
      selectedIconPath: "/static/msg_selected.png",
      text: "记一笔"
    }, {
      pagePath: "/pages/accountBook/index",
      iconPath: "/static/home.png",
      selectedIconPath: "/static/home_selected.png",
      text: "账本"
    }, {
      pagePath: "/pages/chart/chart",
      iconPath: "/static/chart.png",
      selectedIconPath: "/static/chart_selected.png",
      text: "图表分析"
    }, {
      pagePath: "/pages/mine/mine",
      iconPath: "/static/me.png",
      selectedIconPath: "/static/me_selected.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})