const express = require('express')
const app = express()

// 定义一个最简单的中间件函数
const kw = (req, res, next) => {
  console.log('这是最简单的中间件函数')

  // 把流转关系，转交给下一个中间件或者路由
  next()
}

// 全局生效的中间件
app.use(kw)

app.get('/', (req, res) => {
  console.log('调用了 / 这个路由')
  
  res.send('Home page')
})

app.get('/user', (req, res) => {
  console.log('调用了 /user 这个路由')
  res.send('User page')
})

app.listen(3000, () => {
  console.log('running……')
})
