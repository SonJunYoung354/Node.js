var express = require('express');
var router = express.Router();
const database = require('./firebase/config');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/save', function(req, res, next) {
  database.ref('customer').set({name : "junseok"}, function(error) {
    if(error)
        console.error(error)
    else
        console.log("success save !!");
    });
return res.json({firebase : true});
});



module.exports = router;
