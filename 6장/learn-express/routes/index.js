var express = require('express');
var router = express.Router();

router.get('/', function(req, res,next ) {
  next(router);
},function( req, res , next) {
  console.log('실행되지 않습니다');
  next();
}, function (req, res , next){
  console.log('실행되지 않습니다');
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
