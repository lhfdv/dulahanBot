module.exports = 
	{
	name: 'Viera Gaze',
	description: 'Viera gazing',
	execute(msg) { 
	if(!msg.mentions.users.first()) return msg.channel.send("ERRO: Sem menção para bonkar");
	const taggedUser = msg.mentions.users.first();
	const description = `Harumi's Viera gaze at the sheer stupidity of the situation`;
	const img = { url: 'https://i.imgur.com/051Tim0.gif' };
	return msg.channel.send({embed: 
				 { color: 0xff9900, 
				   description: description, 
				   image: img,
	}});
}};
