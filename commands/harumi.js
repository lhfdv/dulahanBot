module.exports = {
	name: 'harumi',
	description: 'Harumi',
	execute (msg) {
		const list = [ 'um torado' , 'uma aberração', 'um pebado', 'um monstro', 'uma cria de carioca', 'uma cria de jundiaiense', 'um esculhambado', 'um fajuto' ]
		msg.channel.send(`Harumi é ${list[Math.floor(Math.random() * list.length)]}!`);
    }
};
