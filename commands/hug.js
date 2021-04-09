module.exports = {
	name: 'hug',
    description: 'hug',
    category: "Emotes",
    usage: "hug",
    accessableby: "Everyone",
    aliases: ["abraçar"],
	async execute (msg) { 

	const Discord = require("discord.js");
	const fetch = require("node-fetch");

	if(!msg.mentions.users.first()) return msg.channel.send("ERRO: Sem menção para abraçar");

	const taggedUser = msg.mentions.users.first();
	let embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);

	let url = `https://api.tenor.com/v1/search?q=anime_hug&key=${process.env.TENORKEY}&limit=50`;
	let response = await fetch (url);
	let json = await response.json();

	let index = Math.floor(Math.random() * json.results.length);
	const urlImg = (json.results[index].media[0].gif.url);
	const description = `${msg.author} abraça ${taggedUser}`;

	const embed = new Discord.MessageEmbed()
        .setDescription(description)
        .setColor(embedcolor)
	    .setImage(`${urlImg}`)

	let msgEmbed = await msg.channel.send({embed})

	msgEmbed

	// const filter = (reaction, user) => {
	// 	console.log('test')
	// 	return reaction.emoji.name === '🔁' && user.id === msg.author.id;
	// };

	// const collector = msg.createReactionCollector(filter, { time: 10000 });

	// collector.on('collect', (reaction, user) => {
	// 	console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
	// });

	// collector.on('end', collected => {
	// 	console.log(`Collected ${collected.size} items`);
	// });

}};
