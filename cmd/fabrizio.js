const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: 'fabrizio',
    description: 'Traga la pizzione',
    category: 'Emotes',
    usage: 'fabrizio',
    accessableby: 'Everyone',
    aliases: ['lambesis'],
		async execute (msg, args) { 

		//Tenor API
		let url = `https://api.tenor.com/v1/search?q=delicious+pizza&key=${process.env.TENORKEY}&limit=50`;
		let response = await fetch (url)
		let json = await response.json()

		const index = Math.floor(Math.random() * json.results.length)
		const urlImg = (json.results[index].media[0].gif.url)
		const embedColor = '#' + ('000000' + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)

		//Model for the original message
		const embed = new Discord.MessageEmbed()
			.setColor(embedColor)
			.setImage(`${urlImg}`)

		msg.channel.send(embed)
	}
}
