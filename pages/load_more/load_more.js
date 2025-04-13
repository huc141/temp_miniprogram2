// pages/load_more/load_more.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                good_list: [1,2,3],
                film_list: []
        },

        // 返回上一页
        navigateBack() {
                wx.navigateBack();
        },

        // 当滑动到底部时触发
        onReachBottom() {
                console.log('滑动到底部，当前电影数量:', this.data.film_list.length);
                // 显示加载中
                wx.showLoading({
                        title: '加载中...',
                });
                
                // 发送请求获取数据
                wx.request({
                        url: 'http://127.0.0.1:8000/app01/random_films/',
                        method: 'GET',
                        success: (res) => {
                                console.log('获取电影数据成功:', res.data);
                                
                                // 获取当前列表
                                const oldList = this.data.film_list;
                                let newFilms = [];
                                
                                // 解析数据 - 根据实际返回结构调整
                                if (res.data.data.films) {
                                        newFilms = res.data.data.films;
                                }
                                
                                console.log('新电影数据数量:', newFilms.length);
                                
                                // 合并数据 - 使用更可靠的方式合并数组
                                if (newFilms && newFilms.length > 0) {
                                        let mergedList = [];
                                        
                                        // 先复制旧列表全部内容
                                        for (let i = 0; i < oldList.length; i++) {
                                                mergedList.push(oldList[i]);
                                        }
                                        
                                        // 再添加新电影数据
                                        for (let i = 0; i < newFilms.length; i++) {
                                                mergedList.push(newFilms[i]);
                                        }
                                        
                                        console.log('合并后总数量:', mergedList.length);
                                        
                                        // 更新到页面
                                        this.setData({
                                                film_list: mergedList
                                        });
                                        
                                        console.log('更新后列表长度:', this.data.film_list.length);
                                } else {
                                        wx.showToast({
                                                title: '没有更多电影了',
                                                icon: 'none'
                                        });
                                }
                        },
                        fail: (err) => {
                                console.log('获取电影数据失败:', err);
                                wx.showToast({
                                        title: '加载失败',
                                        icon: 'none'
                                });
                        },
                        complete: () => {
                                wx.hideLoading();
                        }
                });
        },

        // 下拉刷新
        onPullDownRefresh() {
                console.log('下拉刷新');
                // 下拉刷新后，将数据重置为321
                this.setData({
                        good_list: [3,2,1]
                });
                // 停止下拉刷新
                wx.stopPullDownRefresh();
                // 显示下拉刷新成功
                wx.showToast({
                        title: '下拉刷新成功',
                        icon: 'success',
                        duration: 2000
                });
        },
        
        /**
         * 生命周期函数--监听页面加载
         */
        onLoad(options) {
                console.log('页面加载');
                this.onReachBottom(); // 初始加载第一批数据
        }
})