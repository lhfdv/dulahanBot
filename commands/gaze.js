// module.exports = 
// 	{
// 	name: 'Viera',
// 	description: 'Viera',
// 	execute(msg) { 
// 	const description = `Harumi's Viera gaze at the sheer stupidity of the situation`;
// 	const img = { url: 'https://i.imgur.com/051Tim0.gif' };
// 	return msg.channel.send({embed: 
// 				 { color: 0x783F04, 
// 				   description: description, 
// 				   image: img,
// 	}});
// }};

module.exports = 
	{
	name: 'viera gaze',
	description: 'viera gaze',
	execute(msg) { 
	if(!msg.mentions.users.first()) return msg.channel.send("ERRO: Sem menção para bonkar");
	const taggedUser = msg.mentions.users.first();
	const description = `${msg.author} bonks ${taggedUser}`;
	const rnd_imgs = [
		'https://i.imgur.com/uqzIUSX.gif',
		'https://i.imgur.com/Ed6PnCm.gif',
		'https://i.imgur.com/taqu0OF.gif',
		'https://i.imgur.com/5pmg59F.gif',
		'https://i.imgur.com/zhmacyK.gif',
		'https://i.imgur.com/NwXXKB2.gif'
	]
	return msg.channel.send({embed: 
				 { color: 0xff9900, 
				   description: description, 
				   image: { url: rnd_imgs[Math.floor(Math.random() * rnd_imgs.length)] },
	}});
}};
