const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'deyran——我的博客'
        return args
      })
  }
  // pages: {
  //   index: {
  //     entry: 'src/main.js', // 入口文件
  //     title: '你的标题'
  //   }
  // }
})

