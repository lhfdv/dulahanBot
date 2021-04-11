const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: '!!surprise',
	description: 'A random surprise reaction',
	async execute (msg, args) { 

		//Tenor API
		let url = `https://api.tenor.com/v1/search?q=anime+hug&key=${process.env.TENORKEY}&limit=50`;
		let response = await fetch (url);
		let json = await response.json();

		const taggedUser = msg.mentions.users.first();
		const description = `${msg.author} abraça ${taggedUser}`;
		const index = Math.floor(Math.random() * json.results.length);
		const urlImg = (json.results[index].media[0].gif.url);
		const embedColor = '#' + ('000000' + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);

	}});
}};
