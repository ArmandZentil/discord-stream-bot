
require('dotenv').config();

const Discord = require('discord.js');

const token = process.env.token;

const client = new Discord.Client();

client.on('message', (msg) => {
	if (msg.content === '!sup'){
		msg.channel.send(`yo ${msg.author}, nm dude wys?`);
	}

	if (msg.content === '!AZ') {
		msg.channel.send('https://www.twitch.tv/azstreamlife');
	}
});

client.on('ready', () => {
	console.log('Bot is now connected')

	// client.channels.find(x => x.name === 'lobby').send('Hello! I\'m now connected!');
});



client.login(token); 