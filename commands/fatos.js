module.exports = {
	name: 'fatos harumisticos',
	description: 'Fatos Harumisticos',
	execute(msg) {
		const phrases = [
			'Minha Viera Marronzinha :notes:',
			'Coisa boa é Viera servindo Mocha Branco no Starbucks',
			'FFXIV é muito ruim',
			'Amber é rank SSS',
			'Sabia que roubaram o Machado do Harumi durante o E8S?',
			'Viera é a melhor raça',
			'KKKKKKKK ELES JOGAM FFXIV',
			'Harumi mora em São Paulo, não Osasco',
			'H A R U M I',
			'Café é muito bom',
			'Pra que dormir?',
			'Uma delícia de orelha de Viera',
			'Baseado em fatos Harumisticos',
			'Eu concordo com',
		]
		const response = phrases[Math.floor(Math.random() * phrases.length)];
		return msg.channel.send(response);
	},
};