var crypto = require('crypto')
var mongoose = require('mongoose');
var UrlSchema = new mongoose.Schema({
	name: String,
	link: String
});

UrlSchema.pre('save', function(next){
	if (this.link) {
		this.link = "srt. " + this.link 
	} else {
		this.link = "srt. " + Math.random().toString(36).substring(2, 7)
	}
	next();
})
	
var hash = crypto.createHash('sha1').update('')
mongoose.model('Url', UrlSchema);