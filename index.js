const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '!';
const ytdl = require("ytdl-core");
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
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
	client.user.setActivity('Counter-Strike: Global Offensive');
})

client.on('message', msg =>{
	if (msg.author.bot) return;
	const args = msg.content.trim().split(/ +/);
	const command = args.shift().toLowerCase();

    try{
        client.commands.get(command).execute(msg, args);
    } catch{ return; }

});

client.login(process.env.token);
