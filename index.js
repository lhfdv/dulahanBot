const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
// const config = require('./config.json')
// const mongo = require('./utils/mongo.js')
require('dotenv').config();

// const messageCount = require('./modules/message-counter')

// const PREFIX = '!';
// const ytdl = require("ytdl-core");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./cmd').filter(file => file.endsWith('.js'));

for ( const file of commandFiles ) {
    const command = require(`./cmd/${file}`)
    client.commands.set(command.name, command)
}

const http = require('http');http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' })
        res.write('Hey')
        res.end()
    }).listen(4000)


client.on('ready', () => { 
	console.log('O pai tá online!');
	client.user.setActivity('theHunter: Call of the Wild')
	
	client.api.applications(client.user.id).guilds('733378438903365662').commands.post({
		data: { 
			name: "data",
			description: "test"
		}
	})
	
	client.ws.on('INTERACTION_CREATE', async interaction => {
		const command = interaction.data.name.toLowerCase();	
		const args = interaction.data.options;
		
		if(command === 'hello'){
			client.api.interactions(interaction.id, interaction.token).callback.post({
				data: {
            type: 4,
            data: {
            content: "hello"
            }
					}
				})
      }

      client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: await createAPIMessage(interaction, embed)
        }
      })

    })
  })
	
//     	await mongo().then(mongoose => {
//         try {
//             console.log("Connected to the Database")
//         } finally {
//             mongoose.connection.close()
//         }
//    })

async function createAPIMessage(interaction, content) {
	const apiMessage = await discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content)
	.resolveData(0)
	.resolveFiles();

  return {...apiMessage.data, files: apiMessage.files }
}

// client.on('ready', async () => {
//     messageCount(client);
// })

client.on('message', msg => {

    if ( msg.author.bot ) return

    let command = ''
    let args = ''

    if ( msg.content.includes('@') || msg.content.includes('bonk') ) {
        args = msg.content.trim().split(/ +/)
        command = args.shift().toLowerCase()
    } else if ( msg.content.toLowerCase().includes('victorizar') ){
        client.commands.get('victorizar').execute(msg, args);
    } else {
        args = msg.content.toString()
        command = args.toLowerCase()
    }

    try{
        client.commands.get(command).execute(msg, args);
    } catch {
        return
    }
	
});

client.login(process.env.token)
