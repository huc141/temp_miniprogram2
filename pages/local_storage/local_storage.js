// pages/local_storage/local_storage.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                inputValue: '',
                storedData: ''
        },

        navigateBack() {
                wx.navigateBack();
        },

        inputChange(e) { 
                this.setData({// 双向绑定，当inputValue的值发生变化时，会触发inputChange事件,this.setData()是小程序更新页面数据的方法
                        // 获取输入框的值，并赋值给inputValue
                        inputValue: e.detail.value
                });
        },

        storageData() {
                // 获取输入框的值，并赋值给data
                const data = this.data.inputValue;
                // 如果输入框的值为空，则弹出提示
                if (!data || data.trim() === '') {
                        wx.showToast({
                                title: '请输入内容',
                                icon: 'none',
                                duration: 2000
                        });
                        return;
                }
                // 将输入框的值存储到本地存储中
                wx.setStorageSync('data', data);
                wx.showToast({
                        title: '数据存储成功',
                        icon: 'success',
                        duration: 2000
                });
        },

        getData() {
                const data = wx.getStorageSync('data');
                if (data) {
                        this.setData({
                                storedData: data
                        });
                        wx.showToast({
                                title: '数据获取成功',
                                icon: 'success',
                                duration: 2000
                        });
                } else {
                        wx.showToast({
                                title: '未找到数据',
                                icon: 'none',
                                duration: 2000
                        });
                }
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad(options) {

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