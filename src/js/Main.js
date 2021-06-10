//Require modules
const Discord = require('discord.js');
const { welcomeImage } = require('discord-welcome-card');
const client = new Discord.Client();
const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');
var path = require('path');

//Require usermade modules
const config = require('../json/config.json');
const welcome = require("../functions/welcome");

//Functions
function Restart() {
setTimeout(function(){
CrashToRestart
 }, 7200000);
}

//Embeds
const DevHot = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle("He do be hot doh")
  .setAuthor('Pi-ware-bot', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128', 'https://oxmc.github.io/pi-ware/')
  .setImage('https://oxmc.github.io/images/download_Moment.jpg')
  .setFooter('Thanks for using this bot!', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128');

const RedditEmbed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle("Reddit")
  .setAuthor('Pi-ware-bot', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128', 'https://www.reddit.com/r/pi_ware/')
  .setDescription("Here's our reddit lik: https://www.reddit.com/r/pi_ware/")
  .setFooter('Thanks for using this bot!', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128');

const Error1Embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Error')
  .setAuthor('Pi-ware-bot', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128', 'https://oxmc.github.io/pi-ware/')
  .setDescription('Warning: There is no member log channel! I will not be able to welcome users or log them!')
  .setFooter('Thanks for using this bot!', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128');

const Error2Embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Error')
  .setAuthor('Pi-ware-bot', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128', 'https://oxmc.github.io/pi-ware/')
  .setDescription('Warning: You do not have the required permisons to use this command.')
  .setFooter('Thanks for using this bot!', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128');

const CommandEmbed2 = new Discord.MessageEmbed()
	.setColor('#0099ff')
  .setTitle('Commands Advanced')
  .setAuthor('Pi-ware Bot', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128', 'https://oxmc.github.io/pi-ware/')
  .setDescription('Here are all the things that you can do with this bot!')
  .addFields(
  		{ name: 'commands', value: '\u200B' },
  		{ name: config.prefix + 'simjoin', value: 'Simulate you joining the server' },
  		{ name: config.prefix + 'simleave', value: 'Simulate you leaving the server' },
      { name: config.prefix + 'serverinfo', value: 'Show an embed with the server information' },
      { name: config.prefix + 'clear', value: 'clear messages' },
  	)
  	.setFooter('Thanks for using this bot!', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128');

const HelpEmbed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('help')
  .setAuthor('Pi-ware Bot', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128', 'https://oxmc.github.io/pi-ware/')
  .setDescription('Here are all the things that you can do with this bot!')
  .addFields(
      { name: 'commands', value: '\u200B' },
      { name: config.prefix + 'help', value: 'Shows this help embed' },
      { name: config.prefix + 'reddit', value: 'Shows an embed with the reddit link.' },
      { name: config.prefix + 'version', value: 'Show a embed with the bots version' },
      { name: config.prefix + 'progress', value: 'Show a embed with the progress of pi-ware development' },
      { name: config.prefix + 'license', value: 'Show a embed with the pi-ware license' },
      { name: config.prefix + 'desc', value: 'Show a embed with the pi-ware description' },
      { name: config.prefix + 'apps', value: 'Show an embed with all apps that are currently on pi-ware' },
      { name: config.prefix + 'ping', value: 'Shows the bot Latency and API Latency.' },
  )
  .setFooter('Thanks for using this bot!', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128');

const VersionEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('version')
	.setAuthor('Pi-ware-bot', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128', 'https://oxmc.github.io/pi-ware/')
	.setDescription('This bot is version ' + config.version)
	.setFooter('Thanks for using this bot!', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128');

const LicenseEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('license')
	.setAuthor('Pi-ware-bot', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128', 'https://oxmc.github.io/pi-ware/')
	.setDescription('Pi-ware uses the ' + config.license + ' license.')
	.setFooter('Thanks for using this bot!', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128');

const ProgressEmbed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Progress')
  .setAuthor('Pi-ware Bot', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128', 'https://oxmc.github.io/pi-ware/')
  .setDescription('Here is the progress of pi-ware development!')
  .setFooter('Thanks for using this bot!', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128');

const DescriptionEmbed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Pi-ware Description')
  .setAuthor('Pi-ware Bot', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128', 'https://oxmc.github.io/pi-ware/')
  .setDescription("Pi-Ware is an app store for the Raspberry Pi that allows you to install apps that you can't get using sudo apt-get install in Terminal.")
  .setFooter('Thanks for using this bot!', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128');

//welcome
client.on('ready', () =>{
    client.user.setStatus('Online')
    client.user.setActivity(config.prefix + 'help', { type: 'PLAYING' })
    console.log('Connected!')
    console.log(`Logged in as ${client.user.tag}!`);
    welcome(client, "840128461984104458", "846425090651586572", "840129326246789120", "840124656510173244", "840136381154197524", "846450909223452693");
})

//Main
client.on('message', async message => { // When the bot receives a message
  //This reads the first part of your message behind your prefix to see which command you want to use.
  var command = message.content.toLowerCase().slice(config.prefix.length).split(' ')[0];

  //These are the arguments behind the commands.
  var args = message.content.split(' ').slice(1);

  //If the user that types a message is a bot account return.
  if (message.author.bot) return;

  //If the message does not start with your prefix return.
  if (!message.content.startsWith(config.prefix)) return;

  if (command === 'help') {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.send(HelpEmbed);
      if (args[0] == "nodm") {
        //Don't dm a user
      } else {
        //This line dm's the user who sent the prefix + help
        message.author.send(CommandEmbed2)
      }
    } else {
      message.channel.send(HelpEmbed);
    }
  }
  if(command === 'announce') {
    const news = args.join(" ");
    const channel = client.channels.cache.find(ch => ch.id === '840128912755130389');
    channel.send(`<@${848483812920262706}>, \n ${news}`);
  }
  if (command === 'hot') {
    message.channel.send(DevHot);
  }
  if (command === 'reddit') {
    message.channel.send(RedditEmbed);
  }
  if (command === "test") {
    client.channels.cache.get('846450909223452693').send('Hello world.');
  }
  if (command === "ping") {
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
  if (command === 'apps') {
      const AppsEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Apps')
        .setAuthor('Pi-ware Bot', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128', 'https://oxmc.github.io/pi-ware/')
        .setDescription('Here are all the apps in pi-ware!')
        .setFooter('Thanks for using this bot!', 'https://cdn.discordapp.com/avatars/825032483766009897/8ad1f9b90757d6c7b3e06b3629760d32.png?size=128');

      const path = './file.txt'

      try {
        fs.unlinkSync(path)
        //file removed
      } catch(err) {
        console.error(err)
      }
      
      //Download apps.json
      const file = fs.createWriteStream("apps.json");
      const request = http.get("https://raw.githubusercontent.com/zachthecoder14/pi-ware/main/func/applist.json", function(response) {
        response.pipe(file);
      });
	  
      //Read app list
      fs.readFile('./src/json/apps.json', 'utf8', (err, data) => {

          if (err) {
              console.log(`Error reading file from disk: ${err}`);
          } else {
              // parse JSON string to JSON object
              const Apps = JSON.parse(data);

              // print all apps
              Apps.forEach(app => {
                  AppsEmbed.addFields({ name: `${app.name}:`, value: `${app.author}` },)
              });
              message.channel.send(AppsEmbed);
          }
      });
  }
  if (command === 'version') {
      message.channel.send(VersionEmbed);
  }
  if (command === 'license') {
      message.channel.send(LicenseEmbed);
  }
  if (command === 'desc') {
      message.channel.send(DescriptionEmbed);
  }
  if (command === "progress") {
    //Read Progress list
    fs.readFile('./src/json/progress.json', 'utf8', (err, data) => {

        if (err) {
            console.log(`Error reading file from disk: ${err}`);
        } else {
            // parse JSON string to JSON object
            const Progress = JSON.parse(data);

            // print all apps
            Progress.forEach(Prog => {
                ProgressEmbed.addFields({ name: `${Prog.name}:`, value: `${Prog.author} - ${Prog.percent}` },)
            });
            message.channel.send(ProgressEmbed);
        }
    });
  }
  if (command === 'simjoin') {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      if (client.emit('guildMemberAdd', message.member)) {
        message.channel.send("Done! I have simulated a user joining the server.");
      } else {
        message.channel.send("Uh oh! i was unable to simulate a user joining the server!");
      }
    } else {
      message.channel.send(Error2Embed)
    }
  }
  if (command === 'simleave') {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      if (client.emit('guildMemberRemove', message.member)) {
        message.channel.send("Done! I have simulated a user leaving the server.");
      } else {
        message.channel.send("Uh oh! i was unable to simulate a user leaving the server!");
      }
    } else {
      message.channel.send(Error2Embed)
    }
  }
  if (command === "serverinfo") {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      const { guild } = message

      const { name, region, memberCount, owner, afkTimeout } = guild
      const icon = guild.iconURL()

      const embed = new Discord.MessageEmbed()
        .setTitle(`Server info for "${name}"`)
        .setThumbnail(icon)
        .addFields(
          {
            name: 'Region',
            value: region,
          },
          {
            name: 'Members',
            value: memberCount,
          },
          {
            name: 'Owner',
            value: owner.user.tag,
          },
          {
            name: 'AFK Timeout',
            value: afkTimeout / 60,
          }
        )

      message.channel.send(embed)
    } else {
      message.channel.send(Error2Embed)
    }
  }
  if (command === "clear") {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      const amount = parseInt(args[0]);

		  if (isNaN(amount)) {
			  return message.reply('you need to input a number between 1 and 100.');
      } else if (amount < 1 || amount > 100) {
	      return message.reply('you need to input a number between 1 and 100.');
      }
      if (amount < 1) {
        message.reply(`Cleared ${amount} message`);
      } else if (amount > 1) {
        message.reply(`Cleared ${amount} messages`);
      }
      amount + 1
      message.channel.bulkDelete(amount);
    }
  }
});

//always remember to never share your token with anyone
client.login(config.token)

//Restart();
