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

router.get('/:url', function(req, res) {
	var name = "localhost:3000/" + req.params.url
	var query = Url.find({'link': name}, function(err, docs){
		res.redirect("http://" + docs[0].url);
	});
})

router.get('/delete/:id', function(req, res) {
	Url.remove({ _id: req.params.id }, function(err, response) {
		if (err) {
			console.log(err)
		}
	});
});
module.exports = router;