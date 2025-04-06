// pages/template_grammar/template_grammar.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                name: '张三',
                age: 20,
                gender: '男',
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
                num: 100,
                goodList: [
                        {       
                                id: 1,
                                name: '商品1',
                                price: 100
                        },
                        {       
                                id: 2,
                                name: '商品2',
                                price: 200
                        },
                        {       
                                id: 3,
                                name: '商品3',
                                price: 300
                        }
                ],
                score: ''
        },

        changeName: function() {
                // 如果当前名字是张三，则改为李四；如果是李四，则改为张三
                const newName = this.data.name === '张三' ? '李四' : '张三';
                this.setData({
                    name: newName
                });
            },

        changeAge: function() {
                this.setData({
                        age: this.data.age + 1
                })
        },

        changeHobby: function() {
                // 如果当前爱好是足球，则改为QQ飞车；如果是QQ飞车，则改为足球
                const newHobby = this.data.userinfo.hobby === '足球' ? 'QQ飞车' : '足球';
                this.setData({
                        'userinfo.hobby': newHobby
                })
        },

        changeList: function() {
                // 如果当前列表是篮球，则改为足球；如果是足球，则改为篮球
                const newList = this.data.list[0].hobby === '篮球' ? '足球' : '篮球';
                this.setData({
                        'list[0].hobby': newList
                })
        },

        changeName2: function() {
                // 解构赋值
                const { name } = this.data.userinfo;
                const { age } = this.data.userinfo;
                const { gender } = this.data.userinfo;
                const { hobby } = this.data.userinfo;
                this.setData({
                        name: name,
                        age: age,
                        gender: gender,
                        hobby: hobby
                })
        },

        checkScore: function(e) {
                // 获取输入值
                let value = e.detail.value;  // 使用let声明value变量
                
                // 清空输入
                if (value === '') {
                        return value;
                }
                
                // 转换为数字
                value = Number(value);
                
                // 限制输入范围在0-100之间
                if (value < 0) {
                        value = 0;
                } else if (value > 100) {
                        value = 100;
                }
                
                // 更新页面数据
                this.setData({
                        score: value  // 设置score为处理后的值
                });
                
                return value;  // 返回最终值（
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