
require('dotenv').config();

const Discord = require('discord.js');

const axios = require('axios');

const token = process.env.token;
const clientID = process.env.clientID;

const client = new Discord.Client();


async function checkAzOnline() {
	const res = await axios.get('https://api.twitch.tv/helix/streams?user_id=109520990', { headers: { "Client-ID": clientID } })
	.catch(error => {
		console.log(error);
	});
	const status = res.data.data.length;
	console.log(status);
	if (status === 0) {
		return;
		// client.channels.find(x => x.name === 'lobby').send('streamer "AZ" is offline');
	} else {
		client.channels.find(x => x.name === 'lobby').send('streamer "AZ" is online' + ' ' + 'https://www.twitch.tv/azstreamlife');
	}
	};

async function checkBrickyOnline() {
	const res = await axios.get('https://api.twitch.tv/helix/streams?user_id=31125018', { headers: { "Client-ID": clientID } })
	.catch(error => {
		console.log(error);
	});
	const status = res.data.data.length;
	console.log(status);
	if (status === 0) {
		return;
		// client.channels.find(x => x.name === 'lobby').send('streamer "BrickyLouch" is offline');
	} else {
		client.channels.find(x => x.name === 'lobby').send('streamer "BrickyLouch" is online ' + ' ' + 'https://www.twitch.tv/BrickyLouch');
	}
	};



// bot commands


client.on('ready', () => {

	console.log('Bot is now connected')
	
	setInterval(checkAzOnline, 30000);
	setInterval(checkBrickyOnline, 30000);

	// checkAzOnline();
	// checkBrickyOnline();

});



client.on('message', (msg) => {
	if (msg.content === '!sup'){
		msg.channel.send(`yo ${msg.author}`);
	}

	if (msg.content === '!AZ') {
		msg.channel.send('https://www.twitch.tv/azstreamlife');
	}

	if (msg.content === '!stream') {

	}
});


// if streamer is live stop checking for 1 hour



client.login(token); 