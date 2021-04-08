const {RichEmbed} = require("discord.js")

exports.run = async function (bot, message, args) {
    let gifs = ['https://media.tenor.com/images/6bdd5b4f5da260636a435d830bccbf25/tenor.gif',
    'https://media1.tenor.com/images/ea7294f9919cd75b9a5217b818a082e3/tenor.gif?itemid=15363712'
];
  
    const embed = new RichEmbed()
    .setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
    .setAuthor(`${msg.author.username} blushes (⁄ʘ⁄ ⁄ ω⁄ ⁄ ʘ⁄)♡`, message.author.avatarURL)
    .setImage(killGifs[Math.floor(Math.random() * gifs.length)]);
    msg.channel.send(embed);
}

module.exports.config = {
    name: "blush",
    description: "blush",
  }
