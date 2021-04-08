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

module.exports = {
	name: 'viera gaze',
	description: 'viera gaze',
	execute(msg) { 
	if(!msg.mentions.users.first()) return msg.channel.send("ERRO: Sem menção para bonkar");
	return msg.channel.send('teste');
}};
