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
    const command = require(`./cmd/${file}`);
    client.commands.set(command.name, command);
}

const http = require('http');http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write('Hey');
        res.end();
    }).listen(4000);

client.on('ready', () => { 
	console.log('O pai tá online!'); 
	client.user.setActivity('theHunter: Call of the Wild');
//     	await mongo().then(mongoose => {
//         try {
//             console.log("Connected to the Database")
//         } finally {
//             mongoose.connection.close()
//         }
//    })
})

// client.on('ready', async () => {
//     messageCount(client);
// })

import requests


url = "https://discord.com/api/v8/applications/772597681800478732/commands"

json = {
    "name": "blep",
    "description": "Send a random adorable animal photo",
    "options": [
        {
            "name": "animal",
            "description": "The type of animal",
            "type": 3,
            "required": True,
            "choices": [
                {
                    "name": "Dog",
                    "value": "animal_dog"
                },
                {
                    "name": "Cat",
                    "value": "animal_cat"
                },
                {
                    "name": "Penguin",
                    "value": "animal_penguin"
                }
            ]
        },
        {
            "name": "only_smol",
            "description": "Whether to show only baby animals",
            "type": 5,
            "required": False
        }
    ]
}

# For authorization, you can use either your bot token
headers = {
    "Authorization": process.env.token
}

r = requests.post(url, headers=headers, json=json)

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
