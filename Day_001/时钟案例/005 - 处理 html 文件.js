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
  // console.log(data)

  // 2.3 读取文件成功后，调用对应的 3 个方法，解析出 css、js、html 内容
  resolveCss(data)
  resolveJs(data)
  resolveHtml(data)
})


// 3.1 处理 css 样式
function resolveCss(htmlStr) {
  // 3.2 使用正则提取页面中的 <style></style>
  const r1 = regStyle.exec(htmlStr)

  // 3.3 将提取出来的样式字符串，做进一步的处理
  const newCss = r1[0].replace('<style>', '').replace('</style>', '')

  // 3.4 将提取出来的 css 样式，写入到 index.css 文件中
  fs.writeFile(path.join(__dirname, '/style/index.css'), newCss, err => {
    if (err) return console.log('写入 css 样式表失败 ！', err.message)

    console.log('写入文件成功')
  })
}

// 4.1 处理 js 脚本
function resolveJs(htmlStr) {
  // 4.2 使用正则表达式提取出页面中的 <script></script> 标签
  const r2 = regScript.exec(htmlStr)

  // 4.3 将提取出来的脚本字符串，做进一步处理
  const newJs = r2[0].replace('<script>', '').replace('</script>', '')

  // 4.4 将提取出来的 js 脚本，写入到 index.js 文件中
  fs.writeFile(path.join(__dirname, '/script/index.js'), newJs, err => {
    if (err) return console.log('写入 JavaScript 脚本失败', err.message)

    console.log('写入脚本文件成功 !')
  })
}

// 5.1 处理 html 文件函数
function resolveHtml(htmlStr) {
  // 5.2 使用字符串的 replace 方法，把内嵌的 <script> 和 <style> 标签，替换为外联的 <link> 和 <script> 标签
  const newHtml = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./style/index.css" />')
    .replace(regScript, '<script src="./script/index.js"></script>')

  // 5.3 将替补完成之后的 html 代码，写入到 index.html 中
  fs.writeFile(path.join(__dirname, '/time.html'), newHtml, err => {
    if (err) return console.log('写入文件失败', err.message)

    console.log('写入 html 页面成功 ！')
  })
}
