module.exports = {
	name: 'fatos harumisticos',
	description: 'Fatos Harumisticos',
	execute (msg) {
		console.log('test')
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
			'Uma pergunta, ja terminei a MSQ, upei todos os crafts, upei todas as jobs, destravei todo conteudo, dei clear em todos os extreme, savage, ultimate e unreals, comprei mansão, entrei na comunidade de RP, instalei mods de todos os tipos, fiz uma FC rank máximo com 200 membros, participo e tenho varias linkshells, ja fiz 999kk em todos os meus 9 retainers, coletei todas as armas, gears, mounts, titles, minions, mas ainda não entendi, quando que o jogo fica divertido?',
			'as vezes penso',
			'kkkkk eles jogam joguinho de tiro',
			'pera que ta chovendo',
			'Bom? Bom pra quem?',
			'Aprende com o João Pedro, aprende a dar porrada nos outros',
			'Verdade Harumi',
			'KKKKKKKKKKKK ELES JOGAM JOGUINHOS',
			'Mocha Branco é muito bom',
			'Sazória ou Sassoria?'
		]
		const response = phrases[Math.floor(Math.random() * phrases.length)];
		msg.channel.send(response);
	},
};
