const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    // 端口号
    port:8086,
    // 主机名
  host:"localhost",
//  启动项目时是否自动打开浏览器
open:true,
// 是否启动
https:false,
proxy:{
   [process.env.VUE_APP_BASE_API]:{
    target:process.env.VUE_APP_SERVICE_URL,
    changeOrigin:true,
    pathRewrite:{
      ["^"+process.env.VUE_APP_BASE_API]:''
    }
   },
  //  [process.env.VUE_APP_BASE_API1]:{
  //   target:process.env.VUE_APP_SERVICE_URL1,
  //   changeOrigin:true,
  //   pathRewrite:{
  //     ["^"+process.env.VUE_APP_BASE_API1]:''
  //   }
  //  }

  // "/dev-api":{
  //      target:"http://localhost:3000",
       
  //      changeOrigin:true,
  //      pathRewrite:{
  //           "^/dev-api":''
  //      }
  // }
}
  }
})
