module.exports = {
	name: 'victorizar',
	description: 'victorizar',
	execute(message) {
		//lol yeah, I know
        messageVic = message.content.replace(/victorizar/ig, '')
        messageVic = messageVic.replace(/(?: Es)/g, ' Ix') 
        messageVic = messageVic.replace(/(?: EX)/g, ' IX')
        messageVic = messageVic.replace(/(?: es)/g, ' ix') 
        messageVic = messageVic.replace(/(?: eX)/g, ' iX')
        messageVic = messageVic.replace(/(?:s)/g, 'x')
        messageVic = messageVic.replace(/(?:S)/g, 'X')
        messageVic = messageVic.replace(/(?:ixxo)/gi, 'isso')
        messageVic = messageVic.replace(/(?:ixxe)/gi, 'esse')
        messageVic = messageVic.replace(/(?:ixxa)/gi, 'essa')
        messageVic = messageVic.replace(/(?:ixtex)/gi, 'estis')
        message.channel.send(messageVic);
    }
};
