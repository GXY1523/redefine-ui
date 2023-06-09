// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave:false
// })

const path=require('path')

module.exports={
  // 修改 src 为 examples
  pages:{
    index:{
      // 修改项目入口文件
      entry:"examples/main.js",
      template:"public/index.html",
      filename:"index.html"
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack:config=>{
    
  config.module
    .rule('js')
    .include
      .add(path.resolve(__dirname,'packages'))
      .end()
    .use('babel')
      .loader('babel-loader')
      .tap(options=>{
        // 修改他的选项
        return options
      })
  },
  
  lintOnSave:false
}
