// Gets all the current news from St. Clair MAD

const config = require('../conf.js');
const StClairAPI = require('../StClairAPI.js');
var madAPI = new StClairAPI(config.apiKey);

exports.run = (client, message, args) => {
    madAPI.getCurrentNews(function(error, response, body) {
        if (response.statusCode === 200) {
            let data = JSON.parse(body);
            if (data.length > 0) {
                let updatedNews = data.sort(function(a, b) {
                    return new Date(a.createdAt) < new Date(b.createdAt)
                });
                content = "**" + updatedNews[0].title + "**\n\n";
                content += updatedNews[0].content;
    
                message.channel.send(content);
            } else {
                message.channel.send('There are no current news on the site');
            }
        }
    });
}