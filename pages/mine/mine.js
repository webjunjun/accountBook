"use strict";
const app = getApp();
Page({
    data: {
        list: [{
            icon: '',
            url: '',
            name: '分类管理',
            isShow: true
        }, {
            icon: '',
            url: '',
            name: '数据管理',
            isShow: true
        }, {
            icon: '',
            url: '',
            name: '定时提醒',
            isShow: true
        }, {
            icon: '',
            url: '',
            name: '我的成就',
            isShow: true
        }, {
            icon: '',
            url: '',
            name: '关于我们',
            isShow: true
        }, {
            icon: '',
            url: '',
            name: '帮助中心',
            isShow: true
        }],
        statisticsCate: [{
            val: 1,
            name: '打卡天数'
        }, {
            val: 2,
            name: '记账总天数'
        }, {
            val: 3,
            name: '记账总笔数'
        }]
    },
    onLoad: function(options) {
        // 页面创建时执行
        const res = wx.getSystemInfoSync();
        console.log(res);
    },
    onShow() {
        // 自定义菜单选中tab
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 3
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