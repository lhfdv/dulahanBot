
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const commandData = require('./commands.js')
const ytdl = require("ytdl-core");
require('dotenv').config()

let servers = {};

client.commands = new Discord.Collection();
client.modules = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./modules/js').filter(file => file.endsWith('.js'));

for ( const file of commandFiles ) {
    const command = require(`./modules/js/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Viera > Resto'); 
	client.user.setActivity('Fanow Fantasy XIV: A Viera Reborn');

    client.api.applications(client.user.id).guilds('733378438903365662').commands.post(commandData);
//test
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

    if ( message.author.bot && message.author.id != 600046504056455208) return

    let command = ''
    let args = ''
    
    const member = message.mentions.members.first()
    
    let bleachCommand = message.content.normalize("NFKC").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    let bleachCommandUsername = message.member.displayName.normalize("NFKC").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    
    if ( message.content.includes('@') || message.content.includes('bonk') || message.content.includes('based') || message.content.includes('B A S E D') ) {
        args = message.content.trim().split(/ +/)
        command = args.shift().toLowerCase()
    } else if ( message.content.toLowerCase().includes('victorizar') ){
        client.commands.get('victorizar').execute(message, args)
    } else if ( bleachCommand.includes('bleach') || bleachCommand.includes('bl3ach') || bleachCommand.includes('ble4ch') || bleachCommand.includes('3l34ch') || bleachCommand.includes('3leach') || bleachCommand.includes('3l3ach') || bleachCommand.includes('3le4ch') || bleachCommand.includes('3l34ch') || bleachCommand.includes('b l e a c h') || bleachCommand.includes('b leach') || bleachCommand.includes('bleac h') || bleachCommand.includes('ble ach') || bleachCommand.includes('blea ch') || bleachCommand.includes('blea ch') || bleachCommand.includes('bl each') || bleachCommand.includes('bl ea ch') || bleachCommand.includes('b.leach') || bleachCommand.includes('bleac.h') || bleachCommand.includes('blea.ch') || bleachCommand.includes('bleahc') || bleachCommand.includes('blaech') ){
	    client.commands.get('bleach').execute(message, args)
  } else if ( bleachCommandUsername.includes('bleach') || bleachCommandUsername.includes('leach') || bleachCommandUsername.includes('bleac') || bleachCommandUsername.includes('bleach') || message.author.tag.toLowerCase().includes('bleach') || bleachCommandUsername.includes('bl3ach') || bleachCommandUsername.includes('ble4ch') || bleachCommandUsername.includes('3l34ch') || bleachCommandUsername.includes('3leach') || bleachCommandUsername.includes('3l3ach') || bleachCommandUsername.includes('3le4ch') || bleachCommandUsername.includes('3l34ch') || bleachCommandUsername.includes('b l e a c h') || bleachCommandUsername.includes('b leach') || bleachCommandUsername.includes('bleac h') || bleachCommandUsername.includes('ble ach') || bleachCommandUsername.includes('blea ch') || bleachCommandUsername.includes('blea ch') || bleachCommandUsername.includes('bl each') || bleachCommandUsername.includes('bl ea ch') || bleachCommandUsername.includes('b.leach') || bleachCommandUsername.includes('bleac.h') || bleachCommandUsername.includes('blea.ch') || bleachCommandUsername.includes('bleahc') || bleachCommandUsername.includes('blaech') ){
    		const randomValidation = Math.floor(Math.random() * 10)
		if(randomValidation > 8) client.commands.get('bleach').execute(message, args)
    } else {
        args = message.content.toString().replace(/\s/g, '');
        command = args.toLowerCase()
    }

    try{
        client.commands.get(command).execute(message, args);
    } catch {
        return
    }

      switch (args[0]){
            case 'play':
                function play(connection, message){
                    var server = servers[message.guild.id];
                    server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
                    server.queue.shift();
                    server.dispatcher.on("end", function(){
                        if(server.queue[0]){
                            message.channel.send("Tocando música pa nóis");
                            play(connection, message);
                        } else {
                            connection.disconnect();
                        }
                    })
                }
                if(!message.member.voice.channel){
                    message.channel.send("Entra num canal");
                    return;
                }
                if(!servers[message.guild.id]) servers[message.guild.id] = {
                    queue: []
                }
                var server = servers[message.guild.id];

                server.queue.push(args[1]);

                if(!message.guild.voiceConnection) message.member.voice.channel.join().then(function(connection){
                    message.channel.send("Tocando música pa nóis");
                    play(connection, message);
                })
                if(!args[1]){
                    message.channel.send("Cade o link pro pai?");
                    return;
                }
            break;

            case 'skip':
                var server = servers[message.guild.id];
                if(server.dispatcher) server.dispatcher.end();
                message.channel.send("Pulinho da Vieira");
            break;

            case 'stop':
                var server = servers[message.guild.id];
                if(message.guild.voice.connection){
                    for(var i = server.queue.length-1; i >= 0; i--){
                        server.queue.splice(i, 2);
                    }
                    server.dispatcher.end();
                    message.channel.send("Chega de música, tá chovendo aqui");
                    //console.log('To parando');
                }
                if(message.guild.connection) message.guild.voice.connection.disconnect();
            	break;
            }
	
});

client.login(process.env.token)
