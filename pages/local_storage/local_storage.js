// pages/local_storage/local_storage.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                syncInputValue: '', // 同步输入框的值
                asyncInputValue: '', // 异步输入框的值
                syncstoredData: '', // 同步存储的数据
                asyncstoredData: '' // 异步存储的数据
        },

        // 返回上一页
        navigateBack() {
                wx.navigateBack();
        },

        // 同步输入框的值
        syncInputChange(e) { 
                this.setData({
                        syncInputValue: e.detail.value  // 使用setData方法将syncInputValue 属性更新为输入框的当前值
                });
        },

        // 异步输入框的值
        asyncInputChange(e) { 
                this.setData({
                        asyncInputValue: e.detail.value
                });
        },

        // 同步存储数据
        storageData() {
                // 获取输入框的值，并赋值给data
                const syncdata = this.data.syncInputValue;
                // 如果输入框的值为空，则弹出提示
                if (!syncdata || syncdata.trim() === '') {// 检查数据是否为空或全是空白字符。trim() 是字符串方法，移除字符串开头和结尾的所有空白字符.
                        wx.showToast({
                                title: '请输入内容',
                                icon: 'none',
                                duration: 2000
                        });
                        return;
                }
                // 将输入框的值存储到本地存储中
                wx.setStorageSync('syncdata', syncdata);// 将输入框的值存储到本地存储中，第一个参数 'data' - 存储键名(key)，相当于数据的标识符,第二个参数 data - 存储的值(value)，即从输入框获取的用户输入内容
                wx.showToast({
                        title: '数据存储成功',
                        icon: 'success',
                        duration: 2000
                });
        },

        getData() {
                const syncdata = wx.getStorageSync('syncdata'); // 从本地存储中获取数据，第一个参数 'data' - 存储键名(key)，相当于数据的标识符,第二个参数 data - 存储的值(value)，即从输入框获取的用户输入内容
                if (syncdata) {  // 如果data存在，则将data的值赋值给storedData
                        this.setData({
                                syncstoredData: syncdata
                        });
                        wx.showToast({ // 显示提示框，提示数据获取成功
                                title: '数据获取成功',
                                icon: 'success',
                                duration: 2000
                        });
                } else {
                        wx.showToast({ // 显示提示框，提示数据获取失败
                                title: '未找到数据',
                                icon: 'none',
                                duration: 2000
                        });
                }
        },

        // 删除数据
        deleteData() {
                wx.removeStorageSync('syncdata'); // 删除本地存储中的数据，第一个参数 'data' - 存储键名(key)，相当于数据的标识符
                // 更新页面显示
                this.setData({
                        syncstoredData: '',
                        asyncstoredData: '',
                        syncInputValue: '',
                        asyncInputValue: ''
                });
                wx.showToast({
                        title: '数据已删除',
                        icon: 'success',
                        duration: 2000
                });
        },

        // 清空数据
        clearData() {
                wx.clearStorageSync(); // 清空本地存储中的所有数据
                // 更新页面显示
                this.setData({
                        syncstoredData: '',
                        asyncstoredData: '',
                        syncInputValue: '',
                        asyncInputValue: ''
                });
                wx.showToast({
                        title: '数据已清空',
                        icon: 'success',
                        duration: 2000
                });
        },

        // 异步存储数据
        asyncStorageData() {
                const asyncdata = this.data.asyncInputValue;
                if (!asyncdata || asyncdata.trim() === '') {
                        wx.showToast({
                                title: '请输入内容',
                                icon: 'none',
                                duration: 2000
                        });
                        return;
                }
                wx.setStorage({
                        key: 'asyncdata',
                        data: asyncdata,
                        success: () => {
                                wx.showToast({
                                        title: '数据存储成功',
                                        icon: 'success',
                                        duration: 2000
                                });
                        },
                        fail: () => {
                                wx.showToast({
                                        title: '数据存储失败',
                                        icon: 'none',
                                        duration: 2000
                                });
                        }
                });
        },
        
        // 异步获取数据
        asyncGetData() {
                wx.getStorage({
                        key: 'asyncdata',
                        success: (res) => {
                                this.setData({
                                        asyncstoredData: res.data    
                                });
                                wx.showToast({
                                        title: '数据获取成功',
                                        icon: 'success',
                                        duration: 2000
                                });     
                        },
                        fail: () => {
                                wx.showToast({
                                        title: '数据获取失败',
                                        icon: 'none',
                                        duration: 2000
                                });
                        }
                });
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