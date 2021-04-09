module.exports = {
	name: 'viera gaze',
	description: 'viera gaze',
	execute(msg) {
	console.log('test')
	msg.channel.send({embed: 
		{ color: 0x783F04, 
		  description: `Harumi's Viera gaze at the sheer stupidity of the situation`, 
		  image: { url: 'https://i.imgur.com/051Tim0.gif' },
	}});
}};