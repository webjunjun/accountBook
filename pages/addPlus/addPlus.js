"use strict";
const app = getApp();
Page({
    data: {},
    onLoad: function(options) {
        // 页面创建时执行
        const res = wx.getSystemInfoSync();
        console.log(res);
    },
    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            });
        }
    },
    onPullDownRefresh: function() {
        // 触发下拉刷新时执行
    },
    onReachBottom: function() {
        // 页面触底时执行
    },
    onShareAppMessage: function () {
        // 页面被用户分享时执行
    },
    // 普通事件绑定
})