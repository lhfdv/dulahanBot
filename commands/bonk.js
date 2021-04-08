module.exports = 
	{
	name: 'bonk',
	description: 'bonk',
	execute(msg) { 
	if(!msg.mentions.users.first()) return msg.channel.send("ERRO: Sem menção para bonkar");
	const taggedUser = msg.mentions.users.first();
	const description = `${msg.author} bonks ${taggedUser}`;
	const img = { url: 'https://i.imgur.com/uqzIUSX.gif' };
	return msg.channel.send({embed: 
				 { color: 0xff9900, 
				   description: description, 
				   image: img,
	}});
}};
