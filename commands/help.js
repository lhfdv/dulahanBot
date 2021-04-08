module.exports = {
    name: 'help',
    description: 'View a full list of commands',
    execute(msg) {
        const Discord = require('discord.js');
        const embed = Discord.MessageEmbed();
        client.commands.forEach(command => {
            embed.addField(`${command.name}`, `${command.description}`, false);
        })
        return msg.channel.send(embed);
    }
}
