// pages/navigate/navigate.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                name: '张三',
                age: 20,
                gender: '男',
                hobby: '篮球',
                userinfo: {
                        name: '李四',
                        age: 21,
                        gender: '女',
                        hobby: '足球'
                },
                list: [
                        {
                                name: '张三',
                                age: 20,
                                gender: '男',
                                hobby: '篮球'
                        }
                ],
                num: 100
        },

        navigateToTemplateGrammar: function() {
                wx.navigateTo({
                        url: '/pages/template_grammar/template_grammar',
                        success: function() {
                                console.log('navigateToTemplateGrammar成功');
                        },
                        fail: function(err) {
                                console.log('navigateToTemplateGrammar失败', err);
                        }
                })
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad(options) {
                console.log("页面加载时，获取到的参数:", options);
        },

          // 编程式导航 - 关闭当前页面，返回上一页面或多级页面
        navigateBackPage: function() {
                wx.navigateBack({
                delta: 1, // 返回的页面数，如果 delta 大于现有页面数，则返回到首页
                success: function() {
                console.log('navigateBack成功');
                },
                fail: function(err) {
                console.log('navigateBack失败', err);
                }
                })
        },

        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady() {

        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow() {

        },

        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide() {

        },

        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload() {

        },

        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        onPullDownRefresh() {

        },

        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom() {

        },

        /**
         * 用户点击右上角分享
         */
        onShareAppMessage() {

        }
})