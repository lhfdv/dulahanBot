module.exports = 
	{
	name: 'bonk',
	description: 'bonk',
	execute(msg) { 
	if(!msg.mentions.users.first()) return msg.channel.send("ERRO: Sem menção para bonkar");
	const taggedUser = msg.mentions.users.first();
	const description = `${msg.author} bonks ${taggedUser}`;
	const img = { url: 'https://i.imgur.com/uqzIUSX.gif' };
	const rnd_imgs = [
		'https://i.imgur.com/uqzIUSX.gif',
		'https://i.imgur.com/Ed6PnCm.gif',
		'https://i.imgur.com/taqu0OF.gif',
	]
	return msg.channel.send({embed: 
				 { color: 0xff9900, 
				   description: description, 
				   image: { url: rnd_imgs[Math.floor(Math.random() * rnd_imgs.length)] },
	}});
}};
