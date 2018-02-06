const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const { prefix, token, fortunes, swear } = require('./config.json');

bot.on('message', message => {
    if (message.author.equals(bot.user)) return;

    if (message.content == "wtf", "stfu", "kys", "fuck you", "fuck", "shit", "bullshit", "ass", "kms") {
        message.channel.sendMessage(swear[Math.floor(Math.random() * swear.length)]);
    }
});

bot.on('ready', () => {
    console.log("READY!"), bot.user.setGame('Doki Doki Literature Club');
});

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('new-members-welcome');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
  });

bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");
    var sentmessage = message.content;

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel. sendMessage("I'm the club president of the Literature Club.");
            break;
        case "say":
            var args = message.content.split(" ").join(" ").slice(5);
            message.channel.sendMessage(args);
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Error, I can't quite understand that");
            break;
        case "pong":
            message.channel.sendMessage("kys");
            break;
        case "server":
            message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nDate Created: ${message.guild.createdAt}`);
            break;
        case "user-info":
            message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
            break;
        default:
            message.channel.sendMessage("Invalid Command");

    }
});

bot.login(token);