// pages/get_avatar/get_avatar.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                avatarUrl: '/images/avatar/profile-active.png',
                showError: false,
                errorMsg: ''
        },

        navigateBack() {
            wx.navigateBack()
        },

        getAvatar(event) {
            console.log('头像事件触发:', event)
            
            // 判断是否有头像URL
            if (event.detail && event.detail.avatarUrl) {
                const tempFilePath = event.detail.avatarUrl
                console.log('获取到临时头像路径:', tempFilePath)
                
                // 保存临时文件到本地
                wx.saveFile({
                    tempFilePath: tempFilePath,
                    success: (res) => {
                        const savedFilePath = res.savedFilePath
                        console.log('头像已保存:', savedFilePath)
                        
                        // 更新头像URL
                        this.setData({
                            avatarUrl: savedFilePath,
                            showError: false,
                            errorMsg: ''
                        })
                        
                        // 可以将头像路径存入缓存
                        wx.setStorageSync('userAvatarPath', savedFilePath)
                    },
                    fail: (err) => {
                        console.error('保存头像失败:', err)
                        // 尝试直接使用临时路径
                        this.setData({
                            avatarUrl: tempFilePath,
                            showError: true,
                            errorMsg: '保存头像失败，尝试使用临时路径'
                        })
                    }
                })
            } else {
                console.error('未获取到头像URL:', event)
                this.setData({
                    showError: true,
                    errorMsg: '未获取到头像'
                })
            }
        },


        /**
         * 生命周期函数--监听页面加载
         */
        onLoad(options) {
            // 尝试从本地存储加载头像
            const savedAvatarPath = wx.getStorageSync('userAvatarPath')
            if (savedAvatarPath) {
                this.setData({
                    avatarUrl: savedAvatarPath
                })
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