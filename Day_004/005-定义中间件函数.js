const express = require('express')
const app = express()

// 定义一个最简单的中间件函数
const kw = () => {
  console.log('这是最简单的中间件函数')

  // 把流转关系，转交给下一个中间件或者路由
  next()
}

app.listen(80, () => {
  console.log('running……')
})
