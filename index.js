const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

// const PREFIX = '!';
// const ytdl = require("ytdl-core");


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

let avoidRepeat = 1;
avoidRepeat--

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
	if ( msg.author.bot || avoidRepeat != 0 ) return;

	const args = msg.content.trim().split(/ +/);
	const command = args.shift().toLowerCase();
	
        try{
            client.commands.get(command).execute(msg, args);
	    avoidRepeat++
        } catch {
            return;
        }
	
});

client.on('message', msg =>{
	if ( msg.author.bot || msg.content.length < 5 || avoidRepeat != 0 ) return;
	
        let args = msg.content.toString();
        const command = args.toLowerCase();
	
        try{
		client.commands.get(command).execute(msg, args);
        } catch {
            return;
        }
});

client.login(process.env.token);
