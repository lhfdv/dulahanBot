module.exports = {
	name: 'bleach',
	description: 'bleach',
	execute (message) {
		const phrases = [
			'Bleach é muito ruim',
      'Bleach sempre foi ruim'
		]
		const response = phrases[Math.floor(Math.random() * phrases.length)];
		message.channel.send(response);
	},
};
