module.exports = {
	name: 'bonk',
	description: 'bonk',
	execute(message) { 

		if(!message.mentions.users.first()) return message.channel.send("ERRO: Sem menção para bonkar");

		const taggedUser = message.mentions.users.first();
		const descriptionSelf = `${message.author} se bonka`;
		const descriptionTagged = `${message.author} bonka ${taggedUser}`;

		const imgListBonk = [
			'https://i.imgur.com/uqzIUSX.gif',
			'https://i.imgur.com/Ed6PnCm.gif',
			'https://i.imgur.com/taqu0OF.gif',
			'https://i.imgur.com/5pmg59F.gif',
			'https://i.imgur.com/zhmacyK.gif',
			'https://i.imgur.com/NwXXKB2.gif',
			'https://i.imgur.com/RBBeQFh.gif'
		]

		const imgListSelfBonk = [
			'https://i.imgur.com/jxCrxhk.gif',
			'https://i.imgur.com/O3lSTuc.gif',
			'https://i.imgur.com/KqkH7L1.gif',
			'https://i.imgur.com/FjnNygg.gif'
		]

		if ( taggedUser.id === message.author.id || !taggedUser.id ) {
			message.channel.send({ embed: { 
			color: 0xff9900, 
			description: descriptionSelf, 
			image: { url: imgListSelfBonk[Math.floor(Math.random() * imgListSelfBonk.length)] },
			}})
		} else {
			message.channel.send({ embed: { 
			color: 0xff9900, 
			description: descriptionTagged, 
			image: { url: imgListBonk[Math.floor(Math.random() * imgListBonk.length)] },
			}})	
		}
}};
