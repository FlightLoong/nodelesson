const path = require('path')

const fpath = '/a/b/c/d/index.html' // 文件的存放路径

var fullName = path.basename(fpath)
console.log(fullName)  // index.html 打印出文件的名称

var extName = path.basename(fpath, '.html')
console.log(extName)  // index 打印文件的名称，但是忽略后缀名
