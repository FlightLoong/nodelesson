const express = require('express')
const app = express()

// 定义中间件函数 mv1
const mv1 = (req, res, next) => {
  console.log('这是中间件函数')

  next()
}

// mv1 这个中间件只在 "当前路由中生效"，这种用法属于 "局部生效的中间件"
app.get('/', mv1, (req, res) => {
  res.send('Home Page')
})

app.get('/user', (req, res) => {
  res.send('User Page')
})

app.listen(3000, () => {
  console.log('running……')
})
