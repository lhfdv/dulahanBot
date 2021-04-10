const categories = [
    {
      emoji: '🟥',
      name: 'Moderation',
      color: '#ff0000',
      title: 'Help',
      description: 'Below you can see the moderation commands.',
      commands: [
        {
          name: 'Moderation 1',
          value: 'to moderate stuff',
        },
        {
          name: 'Moderation 2',
          value: 'to moderate other stuff',
        },
      ],
    },
    {
      emoji: '🟧',
      name: 'Interaction',
      color: '#ffa500',
      title: 'Help',
      description: 'Below you can see the interaction commands.',
      commands: [
        {
          name: 'Interaction 1',
          value: 'to interact 1',
        },
        {
          name: 'Interaction 2',
          value: 'to interact 2',
        },
      ],
    },
    {
      emoji: '🟨',
      name: 'Fun',
      color: '#ffff00',
      title: 'Help',
      description: 'Below you can see the fun commands.',
      commands: [
        {
          name: 'Fun 1',
          value: 'have fun 1',
        },
        {
          name: 'Fun 2',
          value: 'have fun 2',
        },
      ],
    },
    {
      emoji: '🟪',
      name: 'Games',
      color: '#e600e6',
      title: 'Help',
      description: 'Below you can see the games commands.',
      commands: [
        {
          name: 'Game 1',
          value: 'to play game 1',
        },
        {
          name: 'Game 2',
          value: 'to play game 2',
        },
        {
          name: 'Game 3',
          value: 'to play game 3',
        },
      ],
    },
    {
      emoji: '🟫',
      name: 'NSFW',
      color: '#4d0000',
      title: 'Help',
      description: 'Below you can see the NSFW commands.',
      commands: [
        {
          name: 'NSFW 1',
          value: 'nsfw 1',
        },
        {
          name: 'NSFW 2',
          value: 'nsfw 2',
        },
      ],
    },
    {
      emoji: '🟩',
      name: 'Information',
      color: '#008000',
      title: 'Help',
      description: 'Below you can see the information commands.',
      commands: [
        {
          name: 'Info 1',
          value: 'to get info 1',
        },
      ],
    },
  ];
  
  module.exports = {
    name: 'test',
    description: 'Overview of all commands!',
    execute(message, args) {
      const embed = new Discord.MessageEmbed()
        .setColor('#171b20')
        .setTitle('Help')
        .setDescription('React to the message to see commands of a specific category!')
        .addFields(
          // add fields for each category
          categories.map((cat) => ({
            name: `${cat.emoji}   ${cat.name}`,
            value: '\u200b',
          }))
        )
        .setFooter(message.author.username)
        .setTimestamp();
  
      message.channel.send(embed).then((embedMsg) => {
        // send reactions for each emojis
        const emojis = categories.map((cat) => cat.emoji);
        emojis.forEach((emoji) => embedMsg.react(emoji));
  
        // the filter checks if the reaction emoji is in the categories
        // it also checks if the person who reacted shares the same id
        // as the author of the original message
        const filter = (reaction, user) =>
          emojis.includes(reaction.emoji.name) && user.id === message.author.id;
  
        const collector = embedMsg.createReactionCollector(filter, {
          // max number of reactions is the number of categories
          max: emojis.length,
          // it won't accept reactions after 60 seconds
          // optional, you can remove/change it
          time: 60000,
        });
  
        collector.on('collect', (reaction, user) => {
          // find the category by its emoji
          const selectedCategory = categories.find(
            (category) => category.emoji === reaction.emoji.name,
          );
  
          if (!selectedCategory) {
            return message.channel.send('Oops, there was an error... Try again?!');
          }
  
          const embed = new Discord.MessageEmbed()
            .setColor(selectedCategory.color)
            .setTitle(selectedCategory.title)
            .setDescription(selectedCategory.description)
            .addFields(selectedCategory.commands)
            .setFooter(message.author.username)
            .setTimestamp();
  
          message.channel.send(embed);
        });
  
        collector.on('end', (collected, reason) => {
          // reactions are no longer collected
          // if the user clicked on every available emoji
          if (reason === 'limit')
            return message.channel.send(`You've checked every emoji, ${message.author}. I won't accept any more reactions.`);
  
          // if it's timeout
          return message.channel.send(`It's been a minute now, so I won't accept any more reactions.`);
        });
      });
    },
  };