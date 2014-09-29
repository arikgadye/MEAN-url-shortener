var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Url = mongoose.model('Url');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/urls', function(req, res, next) {
  Url.find(function(err, urls){
    if(err){ return next(err); }

    res.json(urls);
  });
});

router.post('/urls', function(req, res, next) {
	var url = new Url(req.body);

	url.save(function(err, url){
		if(err){return next(err);}

		res.json(url)
	});
});

router.param('url', function(req, res, next, id) {
	var query = Url.findById(id);

	query.exec(function (err, url) {
		if (err) { return next(err) }
			if (!post) { return next(new Error("can't find url")); }

		req.url = url;
		return next();
	});
});

router.get('/urls/:url', function(req, res) {
	res.json(req.url);
});

module.exports = router;