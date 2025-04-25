// pages/life_cycle/life_cycle.js
Page({

        /**
         * 页面的初始数据
         */
        data: {

        },
        // 返回上一页
        navigateBack() {
                wx.navigateBack();
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad(options) {
                console.log('1、页面生命周期演示：页面加载')
        },

        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady() {
                console.log('3、页面生命周期演示：页面初次渲染完成')
        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow() {
                console.log('2、页面生命周期演示：页面显示')

        },

        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide() {
                console.log('4、页面生命周期演示：页面隐藏')
        },

        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload() {
                console.log('5、页面生命周期演示：页面卸载')
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