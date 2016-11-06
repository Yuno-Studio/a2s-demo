var keystone = require('keystone');
var Carousel = keystone.list('Carousel');
 
exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res);

    Carousel.model.find()
    	.exec(function(error, carousels){
    		if (error){
    			console.log('failed to query carousels from db');
    			return view.render('index');
    		}
    		var result = [];
    		for (i in carousels){
    			var carousel = carousels[i];
    			var option = {'image': carousel.image.secure_url};
    			var caption = carousel.caption;
    			if (caption !== null){
    				option['p'] = caption;
    			}
    			result.push(option);
    		}
    		console.log(JSON.stringify(result));
    		return view.render('index', {'carousels': result});
    	});    
}