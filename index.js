
require('dotenv').config();

const Discord = require('discord.js');

const token = process.env.token;
const clientID = process.env.clientID;

const client = new Discord.Client();

const axios = require('axios');



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




client.on('ready', () => {

	console.log('Bot is now connected')
	
	setInterval(checkAzOnline, 60000);
	setInterval(checkBrickyOnline, 60000);

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








// getSrc().then(response => {
// console.log(response.data);
// console.log(response.data.data.length);
// var streamStatus = response.data.data.length;
// if (streamStatus === 0) {
// 	console.log('stream is offline');
// } else {
// 	console.log('stream is online');
//     }
// })
// .catch(error => {
//     console.log(error);
// });






client.login(token); 