module.exports = {
    name: "blush",
    description: "blush",
    execute (msg) {
    const Discord = require("discord.js");
    let gifs = ['https://media.tenor.com/images/6bdd5b4f5da260636a435d830bccbf25/tenor.gif',
    'https://media1.tenor.com/images/ea7294f9919cd75b9a5217b818a082e3/tenor.gif?itemid=15363712' ]
    const embed = new RichEmbed()
        .setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
        .setAuthor(`${msg.author.username} blushes (⁄ʘ⁄ ⁄ ω⁄ ⁄ ʘ⁄)♡`, message.author.avatarURL)
        .setImage(gifs[Math.floor(Math.random() * gifs.length)]);
    return msg.channel.send(embed);
    }
  }
