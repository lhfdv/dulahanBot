module.exports = {
	name: 'viera gaze',
	description: 'viera gaze',
	execute (msg) {
	msg.channel.send({embed: 
		{ color: 0x783F04, 
		  description: `Harumi's Viera stares at the sheer stupidity of the situation`, 
		  image: { url: 'https://i.imgur.com/HN0ubk5.gif' },
	}});
}};
