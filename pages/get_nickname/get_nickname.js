// pages/get_nickname/get_nickname.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
            customNickname: '',
            currentNickname: ''
        },

        navigateBack() {
            wx.navigateBack();
        },

        /**
         * 获取微信昵称
         */
        getWechatNickname() {
            wx.getUserProfile({
                desc: '用于获取您的微信昵称',
                success: (res) => {
                    console.log('获取用户信息成功', res);
                    this.setData({
                        customNickname: res.userInfo.nickName,
                        currentNickname: res.userInfo.nickName
                    });
                    wx.showToast({
                        title: '已获取微信昵称',
                        icon: 'success'
                    });
                },
                fail: (err) => {
                    console.error('获取用户信息失败', err);
                    wx.showToast({
                        title: '获取失败，请重试',
                        icon: 'none'
                    });
                }
            });
        },

        /**
         * 保存昵称
         */
        saveNickname() {
            if (!this.data.customNickname.trim()) {
                wx.showToast({
                    title: '请输入昵称',
                    icon: 'none'
                });
                return;
            }
            
            // 保存昵称逻辑
            this.setData({
                currentNickname: this.data.customNickname
            });
            
            // 可以在这里将昵称保存到本地存储
            wx.setStorageSync('userNickname', this.data.customNickname);
            
            wx.showToast({
                title: '昵称已保存',
                icon: 'success'
            });
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad(options) {
            // 从本地存储加载昵称
            const nickname = wx.getStorageSync('userNickname');
            if (nickname) {
                this.setData({
                    customNickname: nickname,
                    currentNickname: nickname
                });
            }
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