var mongoose = require('mongoose');
var UrlSchema = new mongoose.Schema({
	url: { type: String, index: { unique: true } },
	link: { type: String, index: { unique: true } }
});

UrlSchema.pre('save', function(next){
	if (this.link) {
		this.link = "localhost:3000/" + this.link 
	} else {
		this.link = "localhost:3000/" + Math.random().toString(36).substring(2, 7)
	}
	next();
})
	
mongoose.model('Url', UrlSchema);