// 1. 导入 express
const express = require('express')
// 2. 创建路由对象
const router = express.Router()

// 3. 挂载获取用户列表的路由
router.get('/user/list', (req, res) => {
  res.send('用户列表')
})

// 4. 挂载添加用户列表的路由
router.post('/user/add', (req, res) => {
  res.send('添加用户')
})

// 5. 向外导出路由对象
module.exports = router
