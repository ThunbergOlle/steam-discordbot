const commando = require('discord.js-commando');
const news = require('steam-news');
class NewsCommand extends commando.Command {
    //Runs when the bot starts or it's reloaded
    constructor(client) {
        super(client, {
            name: 'news',
            group: 'steam',
            memberName: 'news',
            description: 'Get the latest steam news for a game.'
        });

    }
    //THIS CODE WILL BE RUN WHEN YOU CALL THE COMMANDS
    async run(message, args) {
        let appid = message.content.substr(6);
        news.getNews(appid, '3', '160', (err, callback) => {
            if(err) throw err;
            for(let i = 0; i < callback.length; i++){
                message.reply(callback[i].title + " link: " + callback[i].url);
            }
        })
    }
}

module.exports = NewsCommand;