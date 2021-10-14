
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const commandData = require('./commands.js')
require('dotenv').config()

client.commands = new Discord.Collection();
client.modules = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./modules/js').filter(file => file.endsWith('.js'));

for ( const file of commandFiles ) {
    const command = require(`./modules/js/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('O pai tá online!'); 
	client.user.setActivity('theHunter: Call of the Wild');

    client.api.applications(client.user.id).guilds('733378438903365662').commands.post(commandData);

    client.ws.on('INTERACTION_CREATE', async interaction => {
        const command = interaction.data.name.toLowerCase();
        const args = interaction.data.options;

        if(command === "echo") {
            const description = args.find(arg => arg.name.toLowerCase() == "content").value;
            const embed = new Discord.MessageEmbed()
                .setTitle("Echo")
                .setDescription(description)
                .setAuthor(interaction.member.user.username);

            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await createAPIMessage(interaction, embed)
                }
            });
        }
    });
});

async function createAPIMessage(interaction, content) {
    const apiMessage = await Discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content)
        .resolveData()
        .resolveFiles();
    
    return { ...apiMessage.data, files: apiMessage.files };
}

client.on('message', message => {

    if ( message.author.bot ) return

    let command = ''
    let args = ''

    if ( message.content.includes('@') || message.content.includes('bonk') ) {
        args = message.content.trim().split(/ +/)
        command = args.shift().toLowerCase()
    } else if ( message.content.toLowerCase().includes('victorizar') ){
        client.commands.get('victorizar').execute(message, args)
    } else if ( message.content.toLowerCase().includes('bleach') || message.content.toLowerCase().includes('bl3ach') || message.content.toLowerCase().includes('ble4ch') || message.content.toLowerCase().includes('3l34ch') || message.content.toLowerCase().includes('3leach') || message.content.toLowerCase().includes('3l3ach') || message.content.toLowerCase().includes('3le4ch') || message.content.toLowerCase().includes('3l34ch') ){
        client.commands.get('bleach').execute(message, args)
    } else {
        args = message.content.toString()
        command = args.toLowerCase()
    }

    try{
        client.commands.get(command).execute(message, args);
    } catch {
        return
    }
	
});

client.login(process.env.token)
