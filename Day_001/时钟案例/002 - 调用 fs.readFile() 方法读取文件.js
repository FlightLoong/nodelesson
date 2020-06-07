// 1.1 导入 fs 文件系统模块
const fs = require('fs')
// 1.2 导入 path 路径处理模块
const path = require('path')

// 1.3 匹配 <style></style> 标签的正则
// \s 表示空白字符  \S 表示非空字符  * 表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/

// 1.4 匹配 <script></script> 标签的正则
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, '/index.html'), 'utf8', function (err, data) {
  // 2.2 读取 html 文件失败
  if (err) return console.log('读取文件失败' + err.message)

  // 2.3 读取文件成功后，调用对应的 3 个方法，解析出 css、js、html 内容
  resolveCss(data)
})
