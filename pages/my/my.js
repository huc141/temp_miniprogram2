// pages/my/my.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                film_list: [],
                showModal: false,
                currentFilmIndex: -1
        },
        getFilmList(){
                wx.request({
                        url: 'http://127.0.0.1:8000/app01/films/',
                        method: 'GET',
                        success: (res) => {
                                console.log(res.data.data.films)
                                if (res.data.status === 0){
                                        // 为每个电影添加点赞和收藏状态
                                        const films = res.data.data.films;
                                        films.forEach(film => {
                                                film.isLiked = false;
                                                film.isCollected = false;
                                        });
                                        this.setData({
                                                film_list: films
                                        })
                                }
                        }
                })
        },

        /**
         * 生命周期函数(钩子函数)--监听页面加载,即当页面一进来，就执行这个函数，就发送请求获取数据
         */
        onLoad(options) {
                this.getFilmList();
        },

        toggleCollect: function(e) {
                const index = e.currentTarget.dataset.index;
                const newList = this.data.film_list;
                // 直接修改对应电影的收藏状态
                newList[index].isCollected = !newList[index].isCollected;
                
                this.setData({
                        film_list: newList
                });

                // 显示收藏状态
                wx.showToast({
                        title: newList[index].isCollected ? '收藏成功' : '取消收藏',
                        icon: 'success',
                        duration: 1000
                });
        },

        toggleLike: function(e) {
                const index = e.currentTarget.dataset.index;
                const newList = this.data.film_list;
                // 直接修改对应电影的点赞状态
                newList[index].isLiked = !newList[index].isLiked;
                
                this.setData({
                        film_list: newList
                });

                // 显示点赞状态
                wx.showToast({
                        title: newList[index].isLiked ? '已点赞' : '已取消',
                        icon: 'success',
                        duration: 1000
                });
        },

        showBuyTicketModal: function(e) {
                const index = e.currentTarget.dataset.index;
                this.setData({
                        showModal: true,
                        currentFilmIndex: index
                });
        },

        hideModal: function() {
                this.setData({
                        showModal: false,
                        currentFilmIndex: -1
                });
        },

        confirmBuyTicket: function() {
                // 这里可以添加跳转到第三方购票网站的代码
                wx.showToast({
                        title: '正在跳转...',
                        icon: 'loading',
                        duration: 2000
                });
                
                // 模拟跳转
                setTimeout(() => {
                        this.hideModal();
                        wx.showToast({
                                title: '跳转成功',
                                icon: 'success'
                        });
                }, 2000);
        }
})