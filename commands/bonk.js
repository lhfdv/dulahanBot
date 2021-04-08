module.exports = 
	{
	name: 'bonk',
	description: 'bonk',
	execute(msg) { 
	if(!msg.mentions.users.first()) return msg.channel.send("Erro");
	const taggedUser = msg.mentions.users.first();
	return msg.channel.send({embed: 
				 { color: 0xff9900, 
				 description: `${msg.author} bonks ${taggedUser}`, 
				image: { url: 'https://i.imgur.com/uqzIUSX.gif' }
	}});
}};
