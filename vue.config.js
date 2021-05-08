module.exports = {
  lintOnSave: true,
  pages:{
    index:{
      entry:'src/examples/main', // 修改项目入口文件
      template:'public/index.html',
      filename:'index.html'
    }
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}