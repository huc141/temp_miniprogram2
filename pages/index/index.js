// index.js
Page({
  data: {
    title: '小程序演示'
  },

  navigateToLocalStorage() {
    wx.navigateTo({
      url: '/pages/local_storage/local_storage'
    })
  },

  navigateToLoadMore() {
    wx.navigateTo({
      url: '/pages/load_more/load_more'
    })
  },

  navigateToScrollView() {
    wx.navigateTo({
      url: '/pages/scroll-view/scroll-view'
    })
  },

  navigateToPageLifeCycle() {
    wx.navigateTo({
      url: '/pages/life_cycle/life_cycle'
    })
  },

  navigateToShareTimeline() {
    wx.navigateTo({
      url: '/pages/share_timeline/share_timeline'
    })
  },

  navigateToGetUserAvatar() {
    wx.navigateTo({
      url: '/pages/get_avatar/get_avatar'
    })
  },

  navigateToGetUserNickname() {
    wx.navigateTo({
      url: '/pages/get_nickname/get_nickname'
    })
  },
  
  // 分享到朋友圈点击事件
  shareToTimeline() {
    wx.showModal({
      title: '分享提示',
      content: '点击右上角"..."，然后选择"分享到朋友圈"即可分享',
      showCancel: false,
      confirmText: '知道了'
    });
  },
  
  /**
   * 用户点击右上角分享给朋友
   */
  onShareAppMessage() {
    const title = this.data.title || '小程序功能演示';
    return {
      title: title,
      path: '/pages/index/index',
      imageUrl: '/images/share_timeline/share_timeline.jpg'  // 确保你的项目中有这个图片，没有的话可以使用其他图片路径
    }
  },

  /**
   * 用户点击右上角分享到朋友圈
   */
  onShareTimeline() {
    const title = this.data.title || '小程序功能演示';
    return {
      title: title,
      query: '',
      imageUrl: '/images/share_timeline/share_timeline.jpg'  // 确保你的项目中有这个图片
    }
  }
})

  