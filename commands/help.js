module.exports = {
    name: 'help',
    description: 'View a full list of commands',
    execute(msg, client) {
         return client.commands.forEach(command => {
            msg.channel.send(`${command.name}`);
         });
    }
}
