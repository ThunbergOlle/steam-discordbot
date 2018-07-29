# Steam-News
This is an easy to use module that get's the latest news from a steam game. This module is using steams api.
This module was made and published by [OlleThunberg](https://github.com/ThunbergOlle).


**Contribute:** [Github Rep](https://github.com/ThunbergOlle/steam-news)


---
**Install**
```js
npm install steam-news --save
```
**Import**
```js
const news = require('steam-news');
```
---
## Methods
Get the latest news from a steam game. Please note that all the input values should be defined as string values. This may not work if they're floats or ints.
```js
const news = require('steam-news');
news.getNews(appid, amount, maxlength, function(err, data){});
```
- appid: The appid of the game you want to get the news from.
- amount: The amount of articles you want to load.
- maxlength: The maxlength of the article response. Recommended to be set at 300.
- callback: The callback you get.
    - err: If there are any errors.
    - data: The data that you get as a response.

#### Example in JS format
```js
const news = require('steam-news');
news.getNews('730', '3', '300', (err, callback)=> {
    if(err) throw err;
    console.log(callback);
});
```

--- 
### Get every title of the news feed
```js
const news = require('steam-news');
news.getNews('730', '3', '300', (err, callback)=> {
    if(err) throw err;
    for(var i = 0; i < callback.length; i++){
        console.log(callback[i].title);
    }
});
```
**Output**
```
CS:GO's UI update is a needed upgrade
CS:GO and Dota 2 trading disabled in the Netherlands after loot box crackdown
Put CS:GO s new Panorama UI through its paces
```

### Get all the urls for the news
```js
news.getNews('730', '3', '300', (err, callback)=> {
    if(err) throw err;
    for(var i = 0; i < callback.length; i++){
        console.log(callback[i].url);
    }
});
```
**Output**
```
https://steamstore-a.akamaihd.net/news/externalpost/pcgamer/2499943313631643550
https://steamstore-a.akamaihd.net/news/externalpost/pcgamer/2499943313627017630
https://steamstore-a.akamaihd.net/news/externalpost/rps/2499943313626956705
```
### More info
I'm really **happy** if you'd like to share this module or use this in your upcomming bot or script or whatever you are going to use this for. If you feel like there is anything missing then please open an issue on the [Github](https://github.com/ThunbergOlle/steam-news) page. I will fix it as soon as possible.

## License
MIT License

Copyright (c) 2018 Olle Thunberg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
