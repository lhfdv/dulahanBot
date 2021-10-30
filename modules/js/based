const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: 'based',
    description: 'cringe',
    category: 'Emotes',
	async execute (message, args) { 

		//Tenor API
		let url = `https://api.tenor.com/v1/search?q=cringe&key=${process.env.TENORKEY}&limit=50`;
		let response = await fetch (url)
		let json = await response.json()

		const index = Math.floor(Math.random() * json.results.length)
		const urlImg = (json.results[index].media[0].gif.url)
		const embedColor = '#' + ('000000' + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)

		//Model for the original message
		const embed = new Discord.MessageEmbed()
			.setColor(embedColor)
			.setImage(`${urlImg}`)

		message.channel.send(embed)
	}
}
