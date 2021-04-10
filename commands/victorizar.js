module.exports = {
	name: 'victorizar',
	description: 'victorizar',
	execute(msg, args) {
		//lol yeah, I know
        msgVic = msg.content.replace(/victorizar/ig, '')
        msgVic = msgVic.replace(/(?: Es)/g, ' Ix') 
        msgVic = msgVic.replace(/(?: EX)/g, ' IX')
        msgVic = msgVic.replace(/(?: es)/g, ' ix') 
        msgVic = msgVic.replace(/(?: eX)/g, ' iX')
        msgVic = msgVic.replace(/(?:s)/g, 'x')
        msgVic = msgVic.replace(/(?:S)/g, 'X')
        msgVic = msgVic.replace(/(?:ixxo)/gi, 'isso')
        msgVic = msgVic.replace(/(?:ixxe)/gi, 'esse')
        msgVic = msgVic.replace(/(?:ixxa)/gi, 'essa')
        msgVic = msgVic.replace(/(?:ixtex)/gi, 'estis')        
        msg.channel.send(msgVic);
    }
};
