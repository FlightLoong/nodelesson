const path = require('path')

const fpath = '/a/b/c/d/index.html' // 文件的存放路径

var fullName = path.extname(fpath)
console.log(fullName)  // .html 返回文件的拓展名
