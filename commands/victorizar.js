module.exports = {
	name: 'victorizar',
	description: 'victorizar',
	execute(msg) {
		    	const test = msg.content.replace(/(?:s)/g, 'x');
			return (`{$test}`);
        }
};
