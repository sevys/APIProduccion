const db = require("../configMysql")


module.exports = {

    insertUsers: (user, callback) => {
        let sql = 'INSERT INTO users SET ?'
        db.query(sql, user, (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    deleteUsers: (id, callback) => {
        let sql = 'DELETE FROM users WHERE id = ?';

        db.query(sql, id, (err, data) =>{
            if (err) throw err;
            return callback(data);
        })
    },

    updateUsers: (product, callback) => {
        let sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
        db.query(sql, [product.name, product.price, product.id], (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    consultUsers: (callback) => {
        let sql = 'SELECT * FROM users';

        db.query(sql, (err, data) =>{
            if (err) throw err;
            if (data != null){
                return callback(data)
            }else {
                return callback(null)
            }
        })
    }
}