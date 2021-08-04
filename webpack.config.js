const path = require("path");

//导出一个webpack配置对象
module.exports = {
  //webpack 的运行模式，可选值有两个development和production
  //开发的时候用development,追求的是打包速度而不是体积
  //项目上线的时候用production,追求的是体积更小而不是打包速度快
  mode: "development",
  //entry:指定要处理的文件
  entry: path.join(__dirname, "./src/index.js"),
  //output:生成的文件存放到哪里
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundles.js",
  },
};
