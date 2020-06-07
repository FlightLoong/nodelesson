// 1. 导入 fs 文件系统模块
const fs = require('fs')

// 2. 调用 fs.writeFile() 方法，写入文件的内容
//  参数 1：表示文件的存放路径
//  参数 2：表示要写入的内容
//  参数 3：回调函数
fs.writeFile('./Tom.txt', ' Jerry', function (err) {
  // 3. err
  // 3.1 如果文件写入成功，则 err 的值等于 null
  // 3.2 如果文件写入失败，则 err 的值等于一个错误对象 
  console.log(err)
})
