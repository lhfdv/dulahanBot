const discord = require("discord.js");
const bot = new discord.Client({disableEveryone: true});

exports.run = (bot, msg, arg) => {
  msg.channel.send("Pinging...").then(m => {
    let ping = m.createdAt - msg.createdAt
    let choices = [
      `Is this ping ok?`,
      `I hope it is fine`,
      `My ping is:`,
      `is this my ping?`
    ]
    let response = choices[Math.floor(Math.random() * choices.length)]
    const embed = new Discord.MessageEmbed
    .setAuthor('Pong!', 'https://cdn.discordapp.com/attachments/632854158789312514/639037787768619010/discord_bot_pfp.jpg');
    .setThumbnail('https://cdn.discordapp.com/attachments/632854158789312514/639388775931183114/ping-pong-twitter.png')
    .setColor('#00ff15')
    .setTitle(`${response}`)
    .addField(`Bot latency:  `, ping)
    .addField(`API latency:  `, `${Math.round(bot.ping)}`)
    return m.edit(embed)
  })
  
}

module.exports.config = {
  name: "ping",
  description: "Replies with the Bot and API latency",
  category: "Miscellaneous",
  usage: "a ping",
  accessableby: "Everyone",
  aliases: ["pong", "latency"]
}
