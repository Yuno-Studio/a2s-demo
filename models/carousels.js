var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Carousel = new keystone.List('Carousel');
 
Carousel.add({
	image: { type: Types.CloudinaryImage, required: true, initial: true },
	caption: { type: Types.Text, initial: true }
});
 
Carousel.register();