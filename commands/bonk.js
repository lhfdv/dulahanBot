module.exports = 
	{
	name: 'bonk',
	description: 'bonk',
	execute(msg) { 
	const taggedUser = msg.mentions.users.first();
	const description = `${msg.author} bonks ${taggedUser}`;
	const bonkEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setDescription(description)
		.setImage("https://media1.tenor.com/images/4dee992174206c66cb208bee31174b8d/tenor.gif?itemid=18805247");
	return msg.channel.send({bonkEmbed});
}};
