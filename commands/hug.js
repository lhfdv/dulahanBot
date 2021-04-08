module.exports = 
	{
	name: 'hug',
	description: 'hug',
	async execute (msg) { 
	if(!msg.mentions.users.first()) return msg.channel.send("ERRO: Sem menção para abraçar");
	const taggedUser = msg.mentions.users.first();
	const description = `${msg.author} hugs ${taggedUser}`;
	const url = `https://api.tenor.com/v1/search?q=anime_hug&key=${process.env.TENORKEY}&limit=10`;
	const response = await fetch (url);
	const result = await response.json();
	const index = Math.floor(Math.random() * result.results.length);
	return msg.channel.send({embed: 
				 { color: 0xff9900, 
				   description: description, 
				   image: result.results[index].url,
	}});
}};
