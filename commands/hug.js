module.exports = {
	name: 'hug',
	description: 'hug',
	async execute (msg) { 
	const fetch = require("node-fetch");
	if(!msg.mentions.users.first()) return msg.channel.send("ERRO: Sem menção para abraçar");
	const taggedUser = msg.mentions.users.first();
	const description = `${msg.author} hugs ${taggedUser}`;
	let url = `https://api.tenor.com/v1/search?q=anime_hug&key=${process.env.TENORKEY}&limit=10`;
	let response = await fetch (url);
	let json = await response.json();
	let index = Math.floor(Math.random() * json.results.length);
	return msg.channel.send({embed: 
				 { color: 0xff9900, 
				   description: description, 
				   image: json.results[index].url,
}})}};
