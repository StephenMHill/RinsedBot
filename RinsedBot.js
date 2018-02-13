/*Variable area*/
var Discord = require('discord.io');
var bot = new Discord.Client({
    
	token: "",
	autorun: true
    
});

var mainChannelID = ""; //  #general channel in server
var debugChannelID = ""; // #debug channel in server
var messageCount = 0;
var restartCount = Math.floor(Math.random() * 25) + 5; // Sets a minimum of 5, maximum of 30



/*Event area*/

bot.on("ready", function(event) {
    
	console.log("Connected!");
	console.log("Logged in as: ");
	console.log(bot.username + " - (" + bot.id + ")");
    sendMessages(debugChannelID, ["Just got back from a Slurp!"]);
    console.log("messages until next JarrodNoise: " + restartCount);
    
    var list = "";
    
    for (id in bot.servers){
        list += id + " " + bot.servers[id] + "\n";
    }
    
    console.log(list);
    
});

bot.on("message", function(user, userID, channelID, message, event) {
	console.log(user/* + " - " + userID*/);
	console.log("in " + channelID);
	console.log(message);
	console.log("----------");
    /* Message Processing Logic*/
	if (message.toLowerCase().includes("android")) {
        
		sendMessages(channelID, ["R dot id dot..."], 1000); //send an android related message with a 1 second delay
        
	} else if (message.toLowerCase().startsWith("!schedule1")) {
        
		sendFiles(channelID, ["img/First-Year.png"]); //Send the first year schedule
        
	} else if (message.toLowerCase().startsWith("!schedule2")) {
        
		sendFiles(channelID, ["img/Second-Year.png"]); //Send the second year schedule
        
	} else if (message.toLowerCase().startsWith("!schedule3")) {
        
		sendFiles(channelID, ["img/Third-Year.png"]); //Send the third year schedule
        
	}else if (message.toLowerCase().startsWith("!schedules")) {
        
        sendFiles(channelID, ["img/First-Year.png", "img/Second-Year.png", "img/Third-Year.png"]);
        
    } else if (message.toLowerCase().startsWith("!execs")) {
        
        sendMessages(channelID, ["President - James Pierce\nVice-President - Adam Bazzi\nSecretary - Kari Gignac\nTreasurer - Chris Dias"], 500);
        
    } else if (message.toLowerCase().startsWith("!help")){
        
        sendMessages(channelID, 
                     ["Here is a list of the available commands  :\n\n" + 
                     "**!schedule#** will display that years schedule (replace # with the number).\n\n" + 
                     "**!schedules** will display all three schedules.\n\n" +
                     "**!execs** will display the list of club executives.\n\n" + 
                     "**!help** will display this list of available commands."]);
        
    }
    
    
    /* JarrodNoises Area*/
    messageCount++;
    
    if(messageCount == restartCount) {
        
        sendMessages(channelID, ["You've got to be kidding me!"], 500); // Send a message after every 5th message after .5 seconds
        messageCount = 0;
        restartCount = Math.floor(Math.random() * 25);
        console.log("messages until next JarrodNoise: " + restartCount);
        
    }
    
});

bot.on("presence", function(user, userID, status, game, event) {
    
	console.log(user + " is now: " + status);
    
});

bot.on("any", function(event) {
    
	/*console.log(rawEvent)*/ //Logs every event
    
});

bot.on("disconnect", function() {
    
	console.log("Bot disconnected");
	bot.connect(); //Auto reconnect
    
});




/*Function declaration area*/
function sendMessages(ID, messageArr, interval) {
    
	var resArr = [], len = messageArr.length;
	var callback = typeof(arguments[2]) === 'function' ?  arguments[2] :  arguments[3];
	if (typeof(interval) !== 'number') interval = 1000;

	function _sendMessages() {
        
		setTimeout(function() {
			if (messageArr[0]) {
				bot.sendMessage({
					to: ID,
					message: messageArr.shift()
				}, function(err, res) {
					resArr.push(err || res);
					if (resArr.length === len) if (typeof(callback) === 'function') callback(resArr);
				});
				_sendMessages();
			}
		}, interval);
	}
    
	_sendMessages();
    
}

function sendFiles(channelID, fileArr, interval) {
    
	var resArr = [], len = fileArr.length;
	var callback = typeof(arguments[2]) === 'function' ? arguments[2] : arguments[3];
	if (typeof(interval) !== 'number') interval = 1000;

	function _sendFiles() {
        
		setTimeout(function() {
			if (fileArr[0]) {
				bot.uploadFile({
					to: channelID,
					file: fileArr.shift()
				}, function(err, res) {
					resArr.push(err || res);
					if (resArr.length === len) if (typeof(callback) === 'function') callback(resArr);
				});
				_sendFiles();
			}
		}, interval);
	}
    
	_sendFiles();
    
}
