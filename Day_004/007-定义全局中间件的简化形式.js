const express = require('express')
const app = express()

// 定义全局中间件的简化形式
app.use((req, res, next) => {
  console.log('定义全局中间件的简化形式')

  next()
})

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
