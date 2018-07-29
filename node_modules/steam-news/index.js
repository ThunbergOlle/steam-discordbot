const request = require('request');

module.exports.getNews = (appid, amount, maxlength, callback) => {
    if(typeof appid !== "string"){
        appid = appid.toString();
    }
    else if(typeof appid === "string"){
        if(maxlength < 150){
            callback("Please put a higher maxlength!");
        }
        request({
            uri: '/ISteamNews/GetNewsForApp/v0002',
            baseUrl: 'http://api.steampowered.com/',
            qs: {
                appid: appid,
                count: amount,
                maxlength: maxlength,
                format: 'json'
            }
        }, (err, res, body) => {
            if(err) callback(err);
            var parse = JSON.parse(body);
            if(parse.appnews === undefined){
                callback("Please set a valid input on the appid, amount, or maxlength value.");
            }
            var appnews = parse.appnews.newsitems;
            var news = [];
            for(var i = 0; i < appnews.length; i++){
                var current = appnews[i];
                news.push({title: current.title, url: current.url, contents: current.contents, author: current.author});
                
            }
            callback(null, news);
        });

    } else {
        callback("Appid is an uknown value..");
    }
}