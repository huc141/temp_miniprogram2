// index.js
Page({
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
  }
})

  