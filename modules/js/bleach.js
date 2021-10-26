module.exports = {
	name: 'bleach',
	description: 'bleach',
	execute (message) {
		const selectE = ['e', '𝖾', '𝚎']
		const selectA = ['a', '𝖺', '𝚊']
		const selectL = ['l', '𝚕', '𝗅']
		const randomE = selectE[Math.floor(Math.random() * selectE.length)]
		const randomL = selectL[Math.floor(Math.random() * selectL.length)]
		const randomA = selectA[Math.floor(Math.random() * selectA.length)]
		const phrases = [
			'B' + randomL + randomE + randomA + 'ch é muito ruim',
      			'B' + randomL + randomE + randomA + 'ch sempre foi ruim',
			'B' + randomL + randomE + randomA + 'ch é MT RUIM',
			'B' + randomL + randomE + randomA + 'ch é ruim',
			'Mas você sabe que B' + randomL + randomE + randomA + 'ch é ruim, pô',
		]
		const response = phrases[Math.floor(Math.random() * phrases.length)];
		message.channel.send(response);
	},
};
