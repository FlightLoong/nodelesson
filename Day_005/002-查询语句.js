// 1. 导入 mysql 模块
var mysql  = require('mysql')
// 2. 建立与 mysql 数据库的连接
var db = mysql.createPool({
  host: '127.0.0.1',  // 数据库的 ip 地址
  user: 'root', // 登录数据库的账号
  password: 'toor', // 登录数据库的密码
  database: 'my_db_01' // 指定要操作哪个数据库
})

// 查询 users 表中所有的用户数据
db.query('select * from users', (err, results) => {
  // 查询失败
  if (err) return console.log(err.message)

  // 查询成功
  console.log(results)
})