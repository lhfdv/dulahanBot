const PREFIX = '!';
const ytdl = require("ytdl-core");

var version = '1.2';

var servers = {};

index();

let args = msg.content.substring(PREFIX.length).split(" ");

switch (args[0]){
    case 'play':
        if(!args[1]){
            msg.channel.send("Cade o link pro pai?");
            return;
        }
        function play(connection, msg){
            var server = servers[msg.guild.id];
            server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
            server.queue.shift();
            server.dispatcher.on("finish", function(){
                if(server.queue[0]){
                    play(connection, msg);
                    msg.channel.send("Tocando música pa nóis");
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
            play(connection, msg);
        })
    break;
}