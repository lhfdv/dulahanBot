const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
// require('dotenv').config();

// const PREFIX = '!';
// const ytdl = require("ytdl-core");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for ( const file of commandFiles ) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const http = require('http');http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
        res.write('Hey');
        res.end();
    }).listen(4000);

client.on('ready', () => { 
	console.log('O pai tá online!'); 
	client.user.setActivity('theHunter: Call of the Wild');
})

client.on('message', msg => {

	if ( msg.author.bot ) return

    let command = ''
    let args = ''

    if ( msg.content.includes('@') ) {
        args = msg.content.trim().split(/ +/)
        command = args.shift().toLowerCase()
    } else if(msg.content.toLowerCase().includes('victorizar')){
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
