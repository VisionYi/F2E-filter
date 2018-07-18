module.exports = {
  // 為了讓 server 直接抓取 dist 靜態資源，不使用網域路徑
  baseUrl: './',
  css: {
    loaderOptions: {
      sass: {
        // 自動載入常用的檔案，例: 全局變數、常用函數
        data: '@import "@/assets/scss/_variables.scss"; @import "@/assets/scss/_mixins.scss";',
      },
    },
  },
};
