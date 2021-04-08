module.exports = {
	name: 'hug',
	description: 'hug',
	async execute (msg) { 
	const Discord = require("discord.js");
	const fetch = require("node-fetch");
	if(!msg.mentions.users.first()) return msg.channel.send("ERRO: Sem menção para abraçar");
	const taggedUser = msg.mentions.users.first();
	let url = `https://api.tenor.com/v1/search?q=anime_hug&key=${process.env.TENORKEY}&limit=10`;
	let response = await fetch (url);
	let json = await response.json();
	let embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
	let index = Math.floor(Math.random() * json.results.length);
	const urlImg = json.results[index].url;
	const description = `${msg.author} hugs ${taggedUser} ${urlImg}`;
	const embed = new Discord.RichEmbed()
            .setDescription(description)
            .setColor(embedcolor)
            .setImage(`${imgUrl}`)
        return message.channel.send({embed: embed});	
	}};
