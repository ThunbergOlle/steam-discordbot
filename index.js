const Discord = require('discord.js');
const commando = require('discord.js-commando');
const token = require('./token.json');

//CREATE THE BOT
const bot = new commando.Client;

bot.registry.registerGroup('steam', 'Steam');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
console.log("Token: "+ token.token);
//LOGIN AS THE BOT
bot.login(token.token);
