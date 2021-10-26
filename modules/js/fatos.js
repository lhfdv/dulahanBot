module.exports = {
	name: 'fatos harumisticos',
	description: 'Fatos Harumisticos',
	execute (message) {
		const phrases = [
			'Minha Viera Marronzinha :notes:',
			'Coisa boa é Viera servindo Mocha Branco no Starbucks',
			'FFXIV é muito ruim',
			'Amber é rank SSS',
			'Sabia que roubaram o Machado do Harumi durante o E8S?',
			'Viera é a melhor raça',
			'KKKKKKKK ELES JOGAM FFXIV',
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
			'Aprende com o João Pedro, aprende a dar porrada nos outros',
			'Verdade Harumi',
			'KKKKKKKKKKKK ELES JOGAM JOGUINHOS',
			'Mocha Branco é muito bom',
			'Sazória ou Sassoria?',
			'FF13 é muito ruim',
			'FF15 o pior da franquia, nem deveria ser FF',
			'Não existe Viera Male',
			'Que merda, Fernando',
			'Marrom com Vermelho',
			'Os caras só assiste anime ruim, impressionante',
			'Ninja é para você, bom gamer. É para você aprender a ser plenamente livre. A colocar a sua dignidade de gamer acima da sua satisfação sexual e do seu ego e suas vaidades fúteis. Ninja é para te ajudar a se tornar um gamer melhor e a lutar por você mesmo, pelo que você quer, pelo que te faz feliz, pelos seus objetivos, pelo que você acredita, para poder praticar seus hobbies, para poder viver sem ter que atender a padrões que só te colocam numa covarde desvantagem, ao passo em que você está inserido em uma sociedade que valoriza healers e tanks. Você deve se desenvolver em todos os aspectos e tanto quanto possível, mas que isso seja feito visando a sua satisfação pessoal, a sua melhora como gamer, a sua capacidade de ajudar outros a seguirem o mesmo caminho e ajudar a reerguer a habilidade dos ninjas. Enquanto você ficar nesse pensamento de jogar com healer ou tank é melhor, você estará preso às mesmas correntes que estava antes. Você não será um bom ninja na plena acepção da palavra.'
		]
		const response = phrases[Math.floor(Math.random() * phrases.length)];
		message.channel.send(response);
	},
};
