// app.js
// 小程序应用的入口文件、生命周期
App({
    // 当小程序初始化完成，会触发onLaunch（全局只触发一次）
    // 微信小程序强制更新
    onLaunch() {
        console.log('小程序只要启动，就会触发onLaunch')
        const update=wx.getUpdateManager()
        update.onUpdateReady(()=>{
            wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，点击确定重启应用',
                showCancel: true,
                cancelText: '取消',
                cancelColor: '#000000',
                confirmText: '确定',
                confirmColor: '#3CC51F',
                success: (result) => {
                    if (result.confirm) {
                        update.applyUpdate()
                    }
                },
                fail: () => {},
                complete: () => {}
            });
        })
    },

    // 当小程序启动，或从后台进入前台显示时，会触发onShow
    onShow(){
        console.log('小程序启动，或从后台进入前台显示了，会触发onShow')
    },

    // 当小程序从前台进入后台时，会触发onHide
    onHide(){
        console.log('小程序从前台进入后台了，会触发onHide')
    }
    
})
