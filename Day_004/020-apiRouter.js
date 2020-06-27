const express = require('express')
const router = express.Router()

// 在这里挂载对应的路由

// 定义 GET 接口 
router.get('/book', (req, res) => {
  // 通过 req.query 获取客户端通过查询字符串发送到服务器的数据
  const query = req.query

  // 调用 res.send() 方法，想客户端响应处理的结果
  res.send({
    status: 0,  // 0 表示处理成功，1 表示处理失败
    msg: 'GET 请求成功',  // 状态描述
    data: query // 需要响应给客户端的数据
  })
})

// 定义 POST 接口
router.post('/book', (req, res) => {
  // 通过 req.body 获取请求题中包含的 url-encoded 格式的数据
  const body = req.body

  // 调用 res.send() 方法，向客户端响应结果
  res.send({
    status: 0,
    msg: 'Post 请求成功',
    data: body
  })
})

module.exports = router
