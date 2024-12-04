var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dbtest',async function(req,res) {
  var sql = 'SELECT * FROM users'
  let user = await db.query(sql);
  res.json(user.rows);
})
module.exports = router;
