var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Publication = new keystone.List('Publication');
 
Publication.add({
	type: {type: Types.Select, options: 'Book Chapters, Journal Publications, Peer-Reviewed IEEE Conference Publications', rquired: true, index: true, initial: true},
	text: {type: Types.Markdown, required: true, initial: true}
});
 
Publication.register();