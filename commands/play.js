module.exports = {
	name: 'splay',
	description: 'splay',
	execute(msg) {
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
	},
};