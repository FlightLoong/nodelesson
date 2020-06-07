const fs = require('fs')

fs.readFile('./Tom.txt', 'utf8', function (err, data) {
  // 判断 err 对象是否为 null
  if (err) {
    return console.log('文件读取失败：', err.message)
  }

  console.log('文件读取成功，内容是：', data)
})
