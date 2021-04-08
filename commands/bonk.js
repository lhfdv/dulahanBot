module.exports = 
	{
	name: 'bonk',
	description: 'bonk',
	execute(msg) { 
	const taggedUser = msg.mentions.users.first();
	return msg.channel.send({embed: 
				 { color: orange, 
				 description: `${msg.author} bonks ${taggedUser}`, 
				image: { url: 'https://media1.tenor.com/images/4dee992174206c66cb208bee31174b8d/tenor.gif' }
	}});
}};
