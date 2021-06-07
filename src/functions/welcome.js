module.exports = (client, welcomeChannel, goodbyeChannel, rulesChannel, helpChannel, roletoadd, memberlogid) => {
  client.on("guildMemberAdd", async (member) => {
    var d = new Date();
    console.log(d.toLocaleString());
    console.log(member + " Joined.");

    member.roles.add(roletoadd)

    const message = `Welcome <@${
      member.id
    }> to pi-ware! Be sure to check out our ${member.guild.channels.cache
      .get(rulesChannel)
      .toString()}, and if you ever need help you can goto ${member.guild.channels.cache
        .get(helpChannel)
        .toString()}!`;

    const Discord = require('discord.js');
    const client = new Discord.Client();

    const UserEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('User Joined')
    .setAuthor('Pi-ware Bot', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128', 'https://oxmc.github.io/pi-ware/')
    .setDescription(`User <@${
      member.id
    }>, joined on ${d.toLocaleString()}`)
    .setFooter('Thanks for using this bot!', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128');

    const memberlog = member.guild.channels.cache.get(memberlogid)
    memberlog.send(UserEmbed);

    const channel = member.guild.channels.cache.get(welcomeChannel)
    const { welcomeImage } = require('discord-welcome-card');
    //Generating the actual welcome Card
    const image = await welcomeImage(member);

    channel.send(message, new Discord.MessageAttachment(image, 'welcome.png'));
  });

  client.on("guildMemberRemove", async (member) => {
    var d = new Date();
    console.log(member + " left.");

    const message = `Goodbye <@${member.id}> !`;

    const Discord = require('discord.js');
    const client = new Discord.Client();

    const UserEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('User left')
    .setAuthor('Pi-ware Bot', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128', 'https://oxmc.github.io/pi-ware/')
    .setDescription(`User <@${
      member.id
    }>, left on ${d.toLocaleString()}`)
    .setFooter('Thanks for using this bot!', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128');

    const memberlog = member.guild.channels.cache.get(memberlogid)
    memberlog.send(UserEmbed);

    const channel = member.guild.channels.cache.get(goodbyeChannel)
    const { goodbyeImage } = require('discord-welcome-card');
    //Generating the actual goodbye Card
    const image = await goodbyeImage(member);

    channel.send(message, new Discord.MessageAttachment(image, 'goodbye.png'));
  });
};
