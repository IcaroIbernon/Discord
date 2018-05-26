const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
});

client.login('NDQ5NzM5NDQ2ODQ2MzU3NTE0.DepHqA.k4WxbgB2WRhFUy7mec3LhHdYMfU');

client.on('message', message => {
    console.log(message.content);
    if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
    if (message.content === '!bnei') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Viaaaaaaaado.');
    }
});

