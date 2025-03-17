// pages/history/history.js
Page({
  // 按钮点击事件处理函数
  handleButtonClick: function() {
    console.log("你触发了一次点击事件！");
  },

  handleBoxTap: function() {
    console.log("点击了外层盒子");
  },

  handleInnerBoxTap: function() {
    console.log("点击了内层盒子");
  },
  
  handleInnerBoxTap2: function() {
    console.log("点击了阻止冒泡的盒子，事件不会冒泡到外层盒子");
  },

  handleInnerBoxTap3: function(event) {
    console.log("点击了事件对象与传参的盒子");
    console.log("事件对象:", event);
    console.log("传入的参数:", event.target.dataset);
    console.log("传入的参数:", event.target.dataset.param);
    console.log("传入的id:", event.target.dataset.id);
    console.log("传入的name:", event.target.dataset.name);
  },

  // 编程式导航 - 保留当前页面，跳转到应用内的某个页面
  navigateTo: function() {
    wx.navigateTo({
      url: '/pages/navigate/navigate?from=navigateTo',
      success: function() {
        console.log('navigateTo成功');
      },
      fail: function(err) {
        console.log('navigateTo失败', err);
      }
    })
  },

  // 编程式导航 - 关闭当前页面，跳转到应用内的某个页面
  redirectTo: function() {
    wx.redirectTo({
      url: '/pages/navigate/navigate?from=redirectTo',
      success: function() {
        console.log('redirectTo成功');
      },
      fail: function(err) {
        console.log('redirectTo失败', err);
      }
    })
  },

  // 编程式导航 - 跳转到tabBar页面，并关闭其他所有非tabBar页面
  switchTab: function() {
    wx.switchTab({
      url: '/pages/my/my',
      success: function() {
        console.log('switchTab成功');
      },
      fail: function(err) {
        console.log('switchTab失败', err);
      }
    })
  },

  // 编程式导航 - 关闭所有页面，打开到应用内的某个页面
  reLaunch: function() {
    wx.reLaunch({
      url: '/pages/navigate/navigate?from=reLaunch',
      success: function() {
        console.log('reLaunch成功');
      },
      fail: function(err) {
        console.log('reLaunch失败', err);
      }
    })
  },

  // 编程式导航 - 关闭当前页面，返回上一页面或多级页面
  navigateBack: function() {
    wx.navigateBack({
      delta: 1, // 返回的页面数，如果 delta 大于现有页面数，则返回到首页
      success: function() {
        console.log('navigateBack成功');
      },
      fail: function(err) {
        console.log('navigateBack失败', err);
      }
    })
  }
})
