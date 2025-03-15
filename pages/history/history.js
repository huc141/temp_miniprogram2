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
  }
})
