module.exports = {
	name: 'victorizar',
	description: 'victorizar',
	execute(msg) {
		    	msg.content.replace(/(?:s)/g, 'x');
			return msg.content;
        }
};
