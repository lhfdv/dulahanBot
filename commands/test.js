module.exports.execute = async function (msg) {
    const Discord = require("discord.js");
    let killGifs = ['https://media.tenor.com/images/6bdd5b4f5da260636a435d830bccbf25/tenor.gif',
    'https://media1.tenor.com/images/ea7294f9919cd75b9a5217b818a082e3/tenor.gif?itemid=15363712'
];
    const embed = new Discord.MessageEmbed()
    .setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
    .setAuthor(`${msg.author.username} blushes (⁄ʘ⁄ ⁄ ω⁄ ⁄ ʘ⁄)♡`, msg.author.avatarURL)
    .setImage(killGifs[Math.floor(Math.random() * killGifs.length)]);
    msg.channel.send(embed);
}
module.exports.config = {
    name: "blush",
    description: "idk just go blush",
    category: "Emotes",
    usage: "blush",
    accessableby: "Everyone",
    aliases: ["flush"]
  }