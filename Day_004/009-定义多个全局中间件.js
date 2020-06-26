const express = require('express')
const app = express()

// 第一个全局中间件
app.use((req, res, next) => {
  console.log('调用了第一个全局的中间件')
  next()
})

// 第二个全局中间件
app.use((req, res, next) => {
  console.log('调用了第二个全局的中间件')
  next()
})

// 定义路由
// 请求这两个路由，会依次触发上述两个全局中间件
app.get('/user', (req, res) => {
  res.send('User Page')
})

app.listen(3000, () => {
  console.log('running……')
})
