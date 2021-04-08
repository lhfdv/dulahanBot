module.exports = {
	name: 'victorizar',
	description: 'victorizar',
	execute(msg) {
		    	msg.content = msg.content.replace(/(?:s)/g, 'x');
		    	msg = msg.content.replace(/(?:S)/g, 'X');
			return msg;
        }
};
