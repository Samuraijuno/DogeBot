const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'

client.once('ready', () => {
    console.log('Doge Bot is online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase()

    if(command === 'bork'){
        message.channel.send('bork bork')
    }
});

client.login(process.env.token);