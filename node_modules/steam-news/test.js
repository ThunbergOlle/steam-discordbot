const news = require('./index.js');

news.getNews('730', '3', '300', (err, callback)=> {
    if(err) throw err;
    for(var i = 0; i < callback.length; i++){
        console.log(callback[i].url);
    }
});