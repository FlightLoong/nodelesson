// 1. 导入 mysql 模块
var mysql  = require('mysql')
// 2. 建立与 mysql 数据库的连接
var db = mysql.createPool({
  host: '127.0.0.1',  // 数据库的 ip 地址
  user: 'root', // 登录数据库的账号
  password: 'toor', // 登录数据库的密码
  database: 'my_db_01' // 指定要操作哪个数据库
})

// 3. 声明要插入到 users 表中的数据对象
const user = { id: 7, username: 'spike', password: '123000' }
// 4. 待执行的 sql 语句
const sqlstr = 'update users set ? where id=?'

// 5. 调用 db.query() 执行 SQL 语句的同时，使用数组依次为占位符指定具体的值
db.query(sqlstr, [user, user.id] ,(err, results) => {
  // 更新失败
  if (err) return console.log(err.message)

  // 更新成功
  if (results.affectedRows === 1) { console.log('更新数据成功') }
})