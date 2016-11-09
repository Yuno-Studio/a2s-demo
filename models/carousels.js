var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Carousel = new keystone.List('Carousel');

var storage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath('./public/upload'),
    publicPath: '/upload',
  }
});
 
Carousel.add({
	image: { 
		type: Types.File,
		storage: storage,
		filename: function(item, file){
			return item.id + '.' + file.extension
		},
		format: function(item, file) {
	    	return '<img src="' + file.href + '" style = "max-width: 120px">';
	    },
		allowedTypes: ['jpg', 'png', 'jepg', 'gif'],
		required: true,
		initial: true 
	},
	caption: { type: Types.Text, initial: true }
});
 
Carousel.register();