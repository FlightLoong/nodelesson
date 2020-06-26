const express = require('express')
const app = express()

// 1. 路由
app.get('/', (req, res) => {
  // 1.1 抛出一个自定义的错误
  throw new Error('服务器内部发生了错误')

  res.send('Home Page.')
})

// 2. 错误级别的中间件
app.use((err, req, res, next) => {
  // 2.1 在服务器打印错误消息
  console.log('发生了错误：' + err.message)

  // 2.2 向客户端响应错误相关的内容 
  res.send(err.message)
})

app.listen(3000, () => {
  console.log('running……')
})
