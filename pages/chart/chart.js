"use strict";
const app = getApp();
import F2 from '@antv/wx-f2'; // 注：也可以不引入，initChart方法已经将F2传入，如果需要引入，注意需要安装@antv/wx-f2依赖
Page({
    data: {
        onInitChart(F2, config) {
            F2.Global.fontFamily = 'sans-serif';
            const chart = new F2.Chart(config);
            const data = [
                { value: 63.4, city: 'New York', date: '2011-10-01' },
                { value: 62.7, city: 'Alaska', date: '2011-10-01' },
                { value: 72.2, city: 'Austin', date: '2011-10-01' },
                { value: 58, city: 'New York', date: '2011-10-02' },
                { value: 59.9, city: 'Alaska', date: '2011-10-02' },
                { value: 67.7, city: 'Austin', date: '2011-10-02' },
                { value: 53.3, city: 'New York', date: '2011-10-03' },
                { value: 59.1, city: 'Alaska', date: '2011-10-03' },
                { value: 69.4, city: 'Austin', date: '2011-10-03' },
            ];
            chart.source(data, {
                date: {
                    range: [0, 1],
                    type: 'timeCat',
                    mask: 'MM-DD'
                },
                value: {
                    max: 300,
                    tickCount: 4
                }
            });
            chart.area().position('date*value').color('city').adjust('stack');
            chart.line().position('date*value').color('city').adjust('stack');
            chart.render();
            return chart;
        }
    },
    onLoad: function(options) {
        // 页面创建时执行
        const res = wx.getSystemInfoSync();
        console.log(F2);
    },
    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 2
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