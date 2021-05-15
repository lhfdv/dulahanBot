module.exports = {
	name: 'viera gaze',
	description: 'viera gaze',
	execute (message) {
	message.channel.send({embed: 
		{ color: 0x6F1E51, 
		  description: `Harumi's Viera stares at the sheer stupidity of the situation`, 
		  image: { url: 'https://i.imgur.com/HN0ubk5.gif' },
	}});
}};
