module.exports = 
	{
	name: 'bonk',
	description: 'bonk',
	execute(msg) { 
	const taggedUser = msg.mentions.users.first();
	const bonkEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setDescription(`${msg.author} bonks ${taggedUser}`, {files: ["https://media1.tenor.com/images/4dee992174206c66cb208bee31174b8d/tenor.gif?itemid=18805247"]})
	return msg.channel.send(bonkEmbed);
}};
