const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '!';
const ytdl = require("ytdl-core");

const http = require('http');http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
        res.write('Hey');
        res.end();
    }).listen(4000);

var version = '1.2';
var servers = {};

client.on('ready', () => {
    console.log('O pai tá online');
})

client.on('message', msg =>{
        let args = msg.content.substring(PREFIX.length).split(" ");

        if(msg.content.toLowerCase().includes("João Pedro".toLowerCase())){
            return msg.channel.send('Mapa');
        }
        if(msg.content.toLowerCase().includes("Mecânica Mata Jo".toLowerCase())){
            return msg.channel.send('Morri');
        }
        if(msg.content.toLowerCase().includes("Ixnow".toLowerCase())){
            return msg.channel.send('Que foi Victória');
        }
        if(msg.content.toLowerCase().includes("Fatos Harumísticos".toLowerCase())){
            return msg.channel.send('Viera servindo Mocha Branco no Starbucks');
        }
        if(msg.content.toLowerCase().includes("-play".toLowerCase())){
            return msg.channel.send('Musica das boas');
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
    
)

client.login(process.env.token);