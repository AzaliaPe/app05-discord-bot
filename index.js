import Discord, { Message } from 'discord.js';

const client = new Discord.Client();

const TOKEN_API = 'NzYyNzEyNTc5ODM0MzgwMzI5.X3tJcQ.DTDPmDd_x_3Hf5V_wvM5d9AckIc';

client.on('ready', ()=>{
    console.log(`Bot logged at: ${client.user.tag}`);
});

client.on('message', message =>{
    if(message.content === 'ping'){
        message.reply('pong');
    }
    if(message.content === 'holi'){
        message.reply('holi, te quiero mucho <3');
    }
});

client.login(TOKEN_API);
