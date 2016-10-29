var keystone = require('keystone');
var Publication = keystone.list('Publication');
 
exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res);
    
    Publication.model.find()
    	.exec(function(error, publications){
    		if (error){
    			console.log('failed to query publications from db with error: ' + error);
    			return view.render('publication');
    		}
    		var books = [];
    		var journals = [];
    		var conferences = [];
    		for (var i in publications){
    			var pub = publications[i];
    			if (pub.type === 'Book Chapters'){
    				books.push(pub);
    			}
    			else if (pub.type === 'Journal Publications'){
    				journals.push(pub);
    			}
    			else if (pub.type === 'Peer-Reviewed IEEE Conference Publications'){
    				conferences.push(pub);
    			}
    		}
    		return view.render('publication', {'books': books, 'journals': journals, 'conferences': conferences});
    	});    
}