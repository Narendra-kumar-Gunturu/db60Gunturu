var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chips', { title: 'Search Results chips' });
});

module.exports = router;