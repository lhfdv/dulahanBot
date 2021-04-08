module.exports = 
	{
	name: 'hug',
	description: 'hug',
	execute(msg) { 
	if(!msg.mentions.users.first()) return msg.channel.send("ERRO: Sem menção para abraçar")
	const taggedUser = msg.mentions.users.first()
	const description = `${msg.author} hugs ${taggedUser}`
	const rnd_imgs = ['https://api.tenor.com/v1/search?q=anime_hug&key=${process.env.TENORKEY}&limit=10']
	return msg.channel.send({embed: 
				 { color: 0xff9900, 
				   description: description, 
				   image: { url: rnd_imgs[Math.floor(Math.random() * rnd_imgs.length)] },
	}});
}};
