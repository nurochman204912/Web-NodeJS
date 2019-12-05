var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index',{
        h1 : 'Babastudio Keren'
    });
});

router.get('/product', function(req, res) {
    res.render('index',{
        h1 : 'product - ini product terbaru dari babastudio'
    });
});
module.exports = router;