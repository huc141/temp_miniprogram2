// app.js
App({
    // 微信小程序强制更新
    onLaunch() {
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
    }
})
