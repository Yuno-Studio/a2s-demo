var keystone = require('keystone');
var secret = require('./secret');
keystone.init({

	'name': 'Atoms To Systems Lab',

	'favicon': 'public/favicon.ico',
	'less': 'public',
	'static': ['public'],

	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'mongo': 'mongodb://localhost/a2s',

	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': secret.cookie_secret

});

// cloudinary config
keystone.set('cloudinary config', { cloud_name: secret.cloudinary.name, api_key: secret.cloudinary.key, api_secret: secret.cloudinary.secret });
keystone.set('cloudinary prefix', 'a2s');
keystone.set('cloudinary folders', true);
keystone.set('cloudinary secure', true);

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();