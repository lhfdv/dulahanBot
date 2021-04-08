module.exports = 
	{
	name: 'Viera Gaze',
	description: 'Viera gazing',
	execute(msg) { 
	const description = `Harumi's Viera gaze at the sheer stupidity of the situation`;
	const img = { url: 'https://i.imgur.com/051Tim0.gif' };
	return msg.channel.send({embed: 
				 { color: 0x783F04, 
				   description: description, 
				   image: img,
	}});
}};
