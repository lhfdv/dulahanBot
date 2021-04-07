module.exports = {
	name: 'bonk',
	description: 'bonk',
	execute(msg) {
        return msg.channel.send(`${this.getMentionedUsernames(msg)}, you've been kissed by **${msg.author.username}**. :kiss:`, {files: ["https://media1.tenor.com/images/4dee992174206c66cb208bee31174b8d/tenor.gif?itemid=18805247"]});
	},
};
