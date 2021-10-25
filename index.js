
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const commandData = require('./commands.js')
const ytdl = require("ytdl-core");
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
	client.user.setActivity('theHunter: Call of the Wild', { type: "STREAMING", url: "https://www.twitch.tv/jo_reaper" });

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
    
    const member = message.mentions.members.first()

    if ( message.content.includes('@') || message.content.includes('bonk') ) {
        args = message.content.trim().split(/ +/)
        command = args.shift().toLowerCase()
    } else if ( message.content.toLowerCase().includes('victorizar') ){
        client.commands.get('victorizar').execute(message, args)
    } else if ( message.content.toLowerCase().includes('bleach') || message.content.toLowerCase().includes('bl3ach') || message.content.toLowerCase().includes('ble4ch') || message.content.toLowerCase().includes('3l34ch') || message.content.toLowerCase().includes('3leach') || message.content.toLowerCase().includes('3l3ach') || message.content.toLowerCase().includes('3le4ch') || message.content.toLowerCase().includes('3l34ch') || message.content.toLowerCase().includes('b l e a c h') || message.content.toLowerCase().includes('b leach') || message.content.toLowerCase().includes('bleac h') || message.content.toLowerCase().includes('ble ach') || message.content.toLowerCase().includes('blea ch') || message.content.toLowerCase().includes('blea ch') || message.content.toLowerCase().includes('bl each') || message.content.toLowerCase().includes('bl ea ch') || message.content.toLowerCase().includes('b.leach') || message.content.toLowerCase().includes('bleac.h') || message.content.toLowerCase().includes('blea.ch') || message.content.toLowerCase().includes('bleahc') || message.content.toLowerCase().includes('blaech') || message.member.displayName.toLowerCase().includes('bl3ach') || message.member.displayName.toLowerCase().includes('ble4ch') || message.member.displayName.toLowerCase().includes('3l34ch') || message.member.displayName.toLowerCase().includes('3leach') || message.member.displayName.toLowerCase().includes('3l3ach') || message.member.displayName.toLowerCase().includes('3le4ch') || message.member.displayName.toLowerCase().includes('3l34ch') || message.member.displayName.toLowerCase().includes('b l e a c h') || message.member.displayName.toLowerCase().includes('b leach') || message.member.displayName.toLowerCase().includes('bleac h') || message.member.displayName.toLowerCase().includes('ble ach') || message.member.displayName.toLowerCase().includes('blea ch') || message.member.displayName.toLowerCase().includes('blea ch') || message.member.displayName.toLowerCase().includes('bl each') || message.member.displayName.toLowerCase().includes('bl ea ch') || message.member.displayName.toLowerCase().includes('b.leach') || message.member.displayName.toLowerCase().includes('bleac.h') || message.member.displayName.toLowerCase().includes('blea.ch') || message.member.displayName.toLowerCase().includes('bleahc') || message.member.displayName.toLowerCase().includes('blaech') ){
	    client.commands.get('bleach').execute(message, args)
 // } else if ( message.member.displayName.toLowerCase().includes('bleach') || message.member.displayName.toLowerCase().includes('leach') || message.member.displayName.toLowerCase().includes('bleac') || message.author.username.toLowerCase().includes('bleach') || message.author.tag.toLowerCase().includes('bleach') ){
    	//client.commands.get('bleach').execute(message, args)
    //}
    } else {
        args = message.content.toString()
        command = args.toLowerCase()
    }

    try{
        client.commands.get(command).execute(message, args);
    } catch {
        return
    }
	


      switch (args[0]){
            case 'play':
                function play(connection, msg){
                    var server = servers[msg.guild.id];
                    server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
                    server.queue.shift();
                    server.dispatcher.on("end", function(){
                        if(server.queue[0]){
                            msg.channel.send("Tocando música pa nóis");
                            play(connection, msg);
                        } else {
                            connection.disconnect();
                        }
                    })
                }
                if(!msg.member.voice.channel){
                    msg.channel.send("Entra num canal");
                    return;
                }
                if(!servers[msg.guild.id]) servers[msg.guild.id] = {
                    queue: []
                }
                var server = servers[msg.guild.id];

                server.queue.push(args[1]);

                if(!msg.guild.voiceConnection) msg.member.voice.channel.join().then(function(connection){
                    msg.channel.send("Tocando música pa nóis");
                    play(connection, msg);
                })
                if(!args[1]){
                    msg.channel.send("Cade o link pro pai?");
                    return;
                }
            break;

            case 'skip':
                var server = servers[msg.guild.id];
                if(server.dispatcher) server.dispatcher.end();
                msg.channel.send("Pulinho da Vieira");
            break;

            case 'stop':
                var server = servers[msg.guild.id];
                if(msg.guild.voice.connection){
                    for(var i = server.queue.length-1; i >= 0; i--){
                        server.queue.splice(i, 2);
                    }
                    server.dispatcher.end();
                    msg.channel.send("Chega de música, tá chovendo aqui");
                    //console.log('To parando');
                }
                if(msg.guild.connection) msg.guild.voice.connection.disconnect();
            break;
            }
    }
	
});

client.login(process.env.token)
