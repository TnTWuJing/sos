const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    // 端口号
    port:666,
    // 主机名
  host:"localhost",
//  启动项目时是否自动打开浏览器
open:true,
// 是否启动
https:false
  }
})
