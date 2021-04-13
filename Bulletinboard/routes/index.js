var express = require('express');
var router = express.Router();

const database = require('./firebase/config');


router.get('/', function(req ,res) {
    database.ref('customer').set({ name: "jun"}, function(error) {
        if(error){
            console.error(error);
        } else {
            console.log("success save !!");
        }
    });
    return res.json({ firebase : true});
});

router.get('/test', function(req, res, next) {
    res.render('test');
  });
  

module.exports = router;