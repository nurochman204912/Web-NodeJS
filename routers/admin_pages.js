var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index',{
        h1 : 'admin area'
    });
});

router.get('/add_page', function(req, res) {
    var title = "";
    var link = "";
    var content = "";

    res.render('admin/add_page',{
         title : title,
         link : link,
         content : content
    });
});

router.post('/add_page', function(req, res){
    req.checkBody('title', 'Title harus diisi!!').notEmpty();
    req.checkBody('link', 'link harus diisi!!').notEmpty();
    req.checkBody('content', 'content harus diisi!!').notEmpty();

    var title = req.body.title;
    var link = req.body.link.replace(/\s+/g, '-').tolowerCase();
    if(link=="")

});

module.exports = router;