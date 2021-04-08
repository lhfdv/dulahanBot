const discord = require('discord.js')
module.exports = {
name: 'help',
async run(client, msg, args) {
const commandFiles = readdirSync(join(__dirname, "./commands/")).filter(file => file.endsWith(".js")); // Get files
const cmdmap = commandFiles.map(files => `${files}`).join(' | Working\n')
const embed = new discord.MessageEmbed()
.setDescription(cmdmap)
msg.channel.send(embed)
}
}
