// pages/my/my.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                film_list: [],

        },
        getFilmList(){
                wx.request({
                        url: 'http://127.0.0.1:8000/app01/films/',
                        method: 'GET',
                        success: (res) => {
                                console.log(res.data.data.films)
                                if (res.data.status === 0){
                                        this.setData({
                                                film_list: res.data.data.films
                                        })
                                }
                        }
                })
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad(options) {

        }
})