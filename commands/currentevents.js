// Gets all the current events from St. Clair MAD Site

const config = require('../conf.js');
const StClairAPI = require('../StClairAPI.js');
var madAPI = new StClairAPI(config.apiKey);

exports.run = (client, message, args) => {
    madAPI.getCurrentEvents(function(error, response, body) {
        if (response.statusCode === 200) {
            let data = JSON.parse(body);
            if (data.length > 0) {
                let updatedEvents = data.sort(function(a, b) {
                    return new Date(a.createdAt) < new Date(b.createdAt)
                });
    
                content = "**" + updatedEvents[0].title + "**";
                content += "\n" + updatedEvents[0].description;
                content += "\nStart Date: " + new Date(updatedEvents[0].startDate);
                content += "\nEnd Date: " + new Date(updatedEvents[0].endDate);
    
                message.channel.send(content);
            } else {
                message.channel.send('There are no events');
            }
        }
    });
}