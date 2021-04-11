module.exports = {
	name: 'bonk',
	description: 'bonk',
	execute(msg) { 

		// if(!msg.mentions.users.first()) return msg.channel.send("ERRO: Sem menção para bonkar");

		const taggedUser = msg.mentions.users.first();
		const descriptionSelf = `${msg.author} se bonka`;
		const descriptionTagged = `${msg.author} bonka ${taggedUser}`;

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

		if ( taggedUser.id === msg.author.id || !taggedUser.id ) {
			msg.channel.send({ embed: { 
			color: 0xff9900, 
			description: descriptionSelf, 
			image: { url: imgListSelfBonk[Math.floor(Math.random() * imgListSelfBonk.length)] },
			}})
		} else {
			msg.channel.send({ embed: { 
			color: 0xff9900, 
			description: descriptionTagged, 
			image: { url: imgListBonk[Math.floor(Math.random() * imgListBonk.length)] },
			}})	
		}
}};
