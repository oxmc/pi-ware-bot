module.exports = (client, welcomeChannel, goodbyeChannel, rulesChannel, helpChannel) => {
  client.on("guildMemberAdd", async (member) => {
    console.log(member + " Joined.");

    const message = `Welcome <@${
      member.id
    }> to pi-ware! Be sure to check out our ${member.guild.channels.cache
      .get(rulesChannel)
      .toString()}, and if you ever need help you can goto ${member.guild.channels.cache
        .get(helpChannel)
        .toString()}!`;

    const Discord = require('discord.js');
    const client = new Discord.Client();

    const channel = member.guild.channels.cache.get(welcomeChannel)
    const { welcomeImage } = require('discord-welcome-card');
    //Generating the actual welcome Card
    const image = await welcomeImage(member);

    channel.send(message, new Discord.MessageAttachment(image, 'welcome.png'));
  });

  client.on("guildMemberRemove", async (member) => {
    console.log(member + " left.");

    const message = `Goodbye <@${member.id}> !`;

    const Discord = require('discord.js');
    const client = new Discord.Client();

    const channel = member.guild.channels.cache.get(goodbyeChannel)
    const { goodbyeImage } = require('discord-welcome-card');
    //Generating the actual goodbye Card
    const image = await goodbyeImage(member);

    channel.send(message, new Discord.MessageAttachment(image, 'goodbye.png'));
  });
};
