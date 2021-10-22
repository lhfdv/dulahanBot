module.exports = {
	name: 'bleach',
	description: 'bleach',
	execute (message) {
		const phrases = [
			'Bleach é muito ruim',
      'Bleach sempre foi ruim',
			'Bleach é MT RUIM',
			'Bleach é ruim',
			'Mas você sabe que Bleach é ruim, pô'
		]
		const response = phrases[Math.floor(Math.random() * phrases.length)];
		message.channel.send(response);
	},
};
