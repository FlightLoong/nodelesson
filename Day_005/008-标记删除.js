// 1. 导入 mysql 模块
var mysql  = require('mysql')
// 2. 建立与 mysql 数据库的连接
var db = mysql.createPool({
  host: '127.0.0.1',  // 数据库的 ip 地址
  user: 'root', // 登录数据库的账号
  password: 'toor', // 登录数据库的密码
  database: 'my_db_01' // 指定要操作哪个数据库
})

// 3. 要执行的 sql 语句
const sqlstr = 'update users set status=1 where id=?'

// 2. 调用 db.query() 执行 SQL 语句的同时，为占位符指定具体的值
db.query(sqlstr, 1 ,(err, results) => {
  // 删除失败
  if (err) return console.log(err.message)

  // 删除成功
  if (results.affectedRows === 1) { console.log('删除数据成功') }
})