// 1. 导入 fs 模块
const fs = require('fs')

// 2. 调用 fs.readFile() 方法读取文件
//  参数 1： 读取文件的存放路径
//  参数 2： 读取文件时候的编码格式，一般默认是 utf8
//  参数 3： 回调函数，拿到读取失败和成功的结果， err 以及 data
fs.readFile('./Tom.txt', 'utf8', function (err, data) {
  // 3. err
  // 如果读取失败，则 err 的值为 null
  // 如果读取失败，则 err 的值为错误对象， data 的值为 undefined
  console.log(err)

  // 4. data 打印成功的结果
  console.log(data)
})
