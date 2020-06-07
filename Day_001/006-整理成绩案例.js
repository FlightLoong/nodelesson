// 1. 导入 fs 文件系统
const fs = require('fs')

// 2.调用 fs.rendFile() 读取文件的内容
fs.readFile('./成绩.txt', 'utf8', function (err, data) {
  // 3. 判断是否读取成功
  if (err) {
    return console.log('读取文件失败！', err.message)
  }

  // 4.1 将成绩按照空格进行分割
  const oldArr = data.split(' ')
  // 4.2 循环分割后的数组，对每一项数据，进行字符串的替换操作
  const newArr = []
  oldArr.forEach(item => {
    // console.log(item)
    newArr.push(item.replace('=', ': '))
  })
  // 4.3 将新数组中的每一项，进行合并，得到一个新的字符串
  const newStr= newArr.join('\r\n')
  // console.log(newStr)

  fs.writeFile('./成绩-ok.txt', newStr, function (err) {
    if (err) {
      return console.log('文件写入失败' + err.message)
    }

    console.log('成绩写入成功')
  })
})
