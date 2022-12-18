const Discord = require('discord.js');
const client = new Discord.Client();
const embed = new Discord.MessageEmbed();
const fs = require('fs');
const ytdl = require('ytdl-core');
require('dotenv').config();

client.commands = new Discord.Collection();
client.modules = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./modules/js').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./modules/js/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log('Viera > Resto');
  client.user.setActivity('Fanow Fantasy XIV: A Viera Reborn');
  client.api.applications(client.user.id).guilds('733378438903365662').commands.post(commandData);

  client.ws.on('INTERACTION_CREATE', async interaction => {
    const command = interaction.data.name.toLowerCase();
    const args = interaction.data.options;

    if (command === 'echo') {
      const description = args.find(arg => arg.name.toLowerCase() === 'content').value;
      const embed = new Discord.MessageEmbed()
        .setTitle('Echo')
        .setDescription(description)
        .setAuthor(interaction.member.user.username);

      client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: await createAPIMessage(interaction, embed),
        },
      });
    }
  });
});

async function createAPIMessage(interaction, content) {
  const apiMessage = await Discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content)
    .resolveData()
    .resolveFiles();

  return { ...apiMessage.data, files: apiMessage.files };
}

client.on
