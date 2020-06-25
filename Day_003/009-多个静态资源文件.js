const express = require('express')
const app = express()

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
app.use(express.static('public'))
app.use(express.static('static'))

app.listen(3000, () => {
  console.log('running……')
})
