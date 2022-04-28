
const Discord = require('discord.js')
const client = new Discord.Client()
const embed = new Discord.MessageEmbed
const fs = require('fs')
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

client.on('message', (message, newMember) => {

    if ( message.author.bot ) return

    let command = ''
    let args = ''
    
    const member = message.mentions.members.first()

//     let bleachCommand = message.content.normalize("NFKC").replace(/[\u0300-\u036f]/g, "").toLowerCase()
//     let bleachCommandUsername = message.member.displayName.normalize("NFKC").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    
    if ( message.content.includes('@') || message.content.includes('bonk') || message.content.includes('based') || message.content.includes('B A S E D') ) {
        args = message.content.trim().split(/ +/)
        command = args.shift().toLowerCase()
//     } else if ( message.content.toLowerCase().includes('victorizar') ){
//         client.commands.get('victorizar').execute(message, args)
//     } else if ( bleachCommand.includes('bleach') || bleachCommand.includes('bl3ach') || bleachCommand.includes('ble4ch') || bleachCommand.includes('3l34ch') || bleachCommand.includes('3leach') || bleachCommand.includes('3l3ach') || bleachCommand.includes('3le4ch') || bleachCommand.includes('3l34ch') || bleachCommand.includes('b l e a c h') || bleachCommand.includes('b leach') || bleachCommand.includes('bleac h') || bleachCommand.includes('ble ach') || bleachCommand.includes('blea ch') || bleachCommand.includes('blea ch') || bleachCommand.includes('bl each') || bleachCommand.includes('bl ea ch') || bleachCommand.includes('b.leach') || bleachCommand.includes('bleac.h') || bleachCommand.includes('blea.ch') || bleachCommand.includes('bleahc') || bleachCommand.includes('blaech') ){
// 	    client.commands.get('bleach').execute(message, args)
//   } else if ( bleachCommandUsername.includes('bleach') || bleachCommandUsername.includes('leach') || bleachCommandUsername.includes('bleac') || bleachCommandUsername.includes('bleach') || message.author.tag.toLowerCase().includes('bleach') || bleachCommandUsername.includes('bl3ach') || bleachCommandUsername.includes('ble4ch') || bleachCommandUsername.includes('3l34ch') || bleachCommandUsername.includes('3leach') || bleachCommandUsername.includes('3l3ach') || bleachCommandUsername.includes('3le4ch') || bleachCommandUsername.includes('3l34ch') || bleachCommandUsername.includes('b l e a c h') || bleachCommandUsername.includes('b leach') || bleachCommandUsername.includes('bleac h') || bleachCommandUsername.includes('ble ach') || bleachCommandUsername.includes('blea ch') || bleachCommandUsername.includes('blea ch') || bleachCommandUsername.includes('bl each') || bleachCommandUsername.includes('bl ea ch') || bleachCommandUsername.includes('b.leach') || bleachCommandUsername.includes('bleac.h') || bleachCommandUsername.includes('blea.ch') || bleachCommandUsername.includes('bleahc') || bleachCommandUsername.includes('blaech') ){
//     		const randomValidation = Math.floor(Math.random() * 10)
// 		if(randomValidation > 8) client.commands.get('bleach').execute(message, args)
    } else {
        args = message.content.toString()
        command = args.toLowerCase()
    }

    member = newMember;
    if (newMember.user.bot) return;
    
    activityLength = newMember.member.presence.activities.length;

    //check to see if the user has an activities, and if so, how many
    if (activityLength >0 ){
        console.log("member has " + activityLength + " activities");

        for (let i = 0; i < activityLength; i++) {         
          
        //Debugging messages to the log
        console.log("Activity in position " + i + " is " + newMember.member.presence.activities[i].name.toLowerCase());
        //console.log("now in lower case " + newMember.member.presence.activities[0].name.toLowerCase());
        //If you want to ban players of any other game than LOL, changer where it says league of legends to any other lowercase name of a game
        if (newMember.member.presence.activities[i].name.toLowerCase() == "league of legends") { // Started playing.
            message.channel.send(`${newMember.user.id} https://www.youtube.com/watch?v=9Deg7VrpHbM`);
        }
    }
    } else {
        console.log("member has no activities");
    }

    try{
        client.commands.get(command).execute(message, args);
    } catch {
        return
    }
	
});

client.on('presenceUpdate', (newMember) => {
    member = newMember;
    if (newMember.user.bot) return;
    
    activityLength = newMember.member.presence.activities.length;

    //check to see if the user has an activities, and if so, how many
    if (activityLength >0 ){
        console.log("member has " + activityLength + " activities");

        for (let i = 0; i < activityLength; i++) {         
          
        //Debugging messages to the log
        console.log("Activity in position " + i + " is " + newMember.member.presence.activities[i].name.toLowerCase());
        //console.log("now in lower case " + newMember.member.presence.activities[0].name.toLowerCase());
        //If you want to ban players of any other game than LOL, changer where it says league of legends to any other lowercase name of a game
        if (newMember.member.presence.activities[i].name.toLowerCase() == "league of legends") { // Started playing.
            channel.send(`${newMember.user.id} https://www.youtube.com/watch?v=9Deg7VrpHbM`);
        }
    }
    } else {
        console.log("member has no activities");
    }
});

client.login(process.env.token)
