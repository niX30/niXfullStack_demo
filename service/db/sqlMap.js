// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into users(id, name, sirname) values (0, ?, ?)',
        select: 'select * from users',
        delete: 'DELETE FROM users WHERE id=?',
        update: 'UPDATE users SET NAME=?,sirname=? WHERE id=?'
    }
}
module.exports = sqlMap;
