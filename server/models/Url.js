var mongoose = require('mongoose');
var UrlSchema = new mongoose.Schema({
	url: String,
	link: String
});

UrlSchema.pre('save', function(next){
	if (this.link) {
		this.link = "srt." + this.link 
	} else {
		this.link = "srt." + Math.random().toString(36).substring(2, 7)
	}
	next();
})
	
mongoose.model('Url', UrlSchema);