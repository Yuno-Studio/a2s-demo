var keystone = require('keystone');
var secret = require('./secret');
keystone.init({

	'name': 'Atoms2Systems',

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

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();