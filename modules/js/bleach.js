module.exports = {
	name: 'bleach',
	description: 'bleach',
	execute (message) {
		const phrases = [
			'Ble𝚊ch é muito ruim',
      			'Ble𝚊ch sempre foi ruim',
			'Bleach é MT RUIM',
			'B𝚕e𝚊ch é ruim',
			'Mas você sabe que Bleach é ruim, pô',
			'Bl𝖾ach é muito ruim',
			'Bl𝖾ach sempre foi ruim',
			'Bl𝚎ach é MT RUIM',
			'Bl𝚎ach é ruim',
			'Mas você sabe que Bl𝖾ach é ruim, pô',
			'B𝚕e𝚊ch é ruim',
			'Mas você sabe que Bleach é ruim, pô',
			'B𝚕𝖾ach é muito ruim',
			'B𝚕𝖾ach sempre foi ruim',
			'B𝚕𝚎ach é MT RUIM',
			'B𝚕𝚎ach é ruim',
			'Mas você sabe que B𝚕𝖾ach é ruim, pô',
			'B𝚕𝖾ac𝚑 sempre foi ruim',
			'B𝚕𝚎ac𝚑 é MT RUIM',
			'B𝚕𝚎ac𝚑 é ruim',
			'Mas você sabe que B𝚕𝖾ac𝚑 é ruim, pô',
		]
		const response = phrases[Math.floor(Math.random() * phrases.length)];
		message.channel.send(response);
	},
};
