const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: 'abraçar',
    description: 'Hug someone',
    category: 'Emotes',
    usage: 'abraçar',
    accessableby: 'Everyone',
    aliases: ['abraçar', 'hug'],
		async execute (message, args) { 

		const taggedUser = message.mentions.users.first();

		if(!message.mentions.users.first()) return message.channel.send('ERRO: Sem menção para abraçar');

		if(taggedUser.id === message.author.id) return message.channel.send('ERRO: Escolha outro usuário para abraçar');

		//Tenor API
		let url = `https://api.tenor.com/v1/search?q=anime+hug&key=${process.env.TENORKEY}&limit=50`;
		let response = await fetch (url);
		let json = await response.json();

		const description = `${message.author} abraça ${taggedUser}`;
		const index = Math.floor(Math.random() * json.results.length);
		const indexAnswer = Math.floor(Math.random() * json.results.length);
		const urlImg = (json.results[index].media[0].gif.url);
		const urlImgAnswer = (json.results[indexAnswer].media[0].gif.url);
		const embedColor = '#' + ('000000' + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
		const embedColorAnswer = '#' + ('000000' + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);

		//Model for answers
		const answer = [{
			emoji: '🔁',
			name: 'Hug Answer',
			color: `${embedColorAnswer}`,
			description: `${taggedUser} abraça ${message.author} de volta!`,
			image: `${urlImgAnswer}`,
		}]

		//Model for the original message
		const embed = new Discord.MessageEmbed()
			.setDescription(description)
			.setColor(embedColor)
			.setImage(`${urlImg}`)

		message.channel.send(embed).then((embedmessage) => {
			//Send reactions for each emojis
			const emojis = answer.map((cat) => cat.emoji);
			emojis.forEach((emoji) => embedmessage.react(emoji));
	
			//The filter checks if the reaction emoji is in the category
			//It also checks if the person who reacted shares the same id
			//As the author of the original message
			const filter = (reaction, user) =>
				emojis.includes(reaction.emoji.name) && user.id === taggedUser.id;
	
			const collector = embedmessage.createReactionCollector(filter, {
				//Max number of reactions is the number of category
				max: emojis.length,
				//It won't accept reactions after 60 seconds
				//Optional, you can remove/change it
				time: 120000,
			});
		
			collector.on('collect', (reaction, user) => {
			//Find the category by emoji
				const selectedAnswer = answer.find(
					(category) => category.emoji === reaction.emoji.name,
			);
		
			if (!selectedAnswer) {
				message.channel.send('Erro');
			}

			const embed = new Discord.MessageEmbed()
				.setColor(selectedAnswer.color)
				.setDescription(selectedAnswer.description)
				.setImage(selectedAnswer.image)

			message.channel.send(embed);
		});
	});
}};
