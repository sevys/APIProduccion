const db = require("../configMysql")


module.exports = {

    insetProduct: (product, callback) => {
        let sql = 'INSERT INTO product SET ?'
        db.query(sql, product, (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    deleteProduct: (id, callback) => {
        let sql = 'DELETE FROM product WHERE id = ?';

        db.query(sql, id, (err, data) =>{
            if (err) throw err;
            return callback(data);
        })
    },

    updateProduct: (product, callback) => {
        let sql = 'UPDATE product SET name = ?, price = ?, type = ? WHERE id = ?';
        db.query(sql, [product.name, product.price, product.type, product.id], (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    consultProduct: (callback) => {
        let sql = 'SELECT * FROM product';

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