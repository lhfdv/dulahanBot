module.exports = {
	name: 'victorizar',
	description: 'victorizar',
	execute(msg) {
		    msg = msg.replace(/(?:s)/g, 'w');
		    msg = msg.replace(/(?:S)/g, 'W');
		    msg = msg.replace(/n([aeiou])/g, 'ny$1');
		    msg = msg.replace(/N([aeiou])|N([AEIOU])/g, 'Ny$1');
		return msg;
        }
};
