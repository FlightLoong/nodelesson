const express = require('express')
const app = express()

// 导入路由模块
const userRouter = require('./002-router')

// 使用 app.use() 注册路由模块
app.use(userRouter)

app.listen(3000, () => {
  console.log('running……')
})
