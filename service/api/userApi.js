var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');
var moment = require('moment');

var conn = mysql.createConnection(models.mysql);
 
conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: 'operation failed'
        });
    } else {
        res.json(ret);
    }
};

router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.name, params.sirname], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

router.get('/addUser', (req, res) => {
     res.send('retrunJson');
});
 
module.exports = router;
