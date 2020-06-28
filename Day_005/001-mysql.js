// 1. 导入 mysql 模块
var mysql  = require('mysql')
// 2. 建立与 mysql 数据库的连接
var db = mysql.createPool({
  host: '127.0.0.1',  // 数据库的 ip 地址
  user: 'root', // 登录数据库的账号
  password: 'toor', // 登录数据库的密码
  database: 'my_db_01' // 指定要操作哪个数据库
})

// 测试 mysql 模块能够正常运行
db.query('select 1', (err, results) => {
  // mysql 模块如果错误，err 中会返回错误信息
  if (err) return console.log(err.message)

  // 能够成功的执行 SQL 语句
  console.log(results)
})