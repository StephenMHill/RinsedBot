/*
  A bot for the MAD Club Discord. Written in Discord.js
*/

/* Constants */
// Room Schedules
const ROOM_52_SCHEDULE = ["./img/052_Winter_2018.png"];
const ROOM_55_SCHEDULE = ["./img/055_Winter_2018.png"];
const ROOM_61_SCHEDULE = ["./img/061_Winter_2018.png"];
const ROOM_SCHEDULES = [ROOM_52_SCHEDULE, ROOM_55_SCHEDULE, ROOM_61_SCHEDULE];
// Class Schedules
const FIRST_YEAR_SCHEDULE = "./img/First-Year.png";
const SECOND_YEAR_SCHEDULE = "./img/Second-Year.png";
const THIRD_YEAR_SCHEDULE = "./img/Third-Year.png";
const CLASS_SCHEDULES = [FIRST_YEAR_SCHEDULE, SECOND_YEAR_SCHEDULE, THIRD_YEAR_SCHEDULE];

/* Variables */
// Import the discord.js module
const Discord = require('discord.js');
// Create an instance of a Discord client
const client = new Discord.Client();

// Import all settings from the conf.js file
var settings = require('./conf.js');

// Declare variables from the conf.js file
var tokenn = settings.tokenn;

// The token of your bot - https://discordapp.com/developers/applications/me
const token = tokenn;

var messageCount = 0;
var restartCount = Math.floor(Math.random() * 25) + 5; // Sets a minimum of 5, maximum of 30

/* Events */
// This will run when the bot is connected and ready
client.on('ready', () => {
    console.log('Connected!');
    console.log("\nLogged in as: ");
	console.log(client.user.username + " - (" + client.user.id + ")");
    
    // Notify users on server of Bot Connect
    // Find the testing server
    var debugGuild = client.guilds.find('name', 'MAD Club');
    
    // Checks if the debugGUild channel exists
    if (debugGuild) { 
        // Find the debug channel
        var debugChannel = debugGuild.channels.find('name', 'bot-testing');
        // Checks if that channel exists
        if (debugChannel) {
            debugChannel.send("Just got back from a Slurp!(reconnected)");
        }
    }

    console.log("messages until next JarrodNoise: " + restartCount);

    // Output all servers(guilds) that the bot is currently in
    client.guilds.forEach( function(guild) {
        console.log("\nName: " + guild.name);
        console.log("ID: " + guild.id);
        console.log("Members: " + guild.memberCount);
    });
    
    
});


// Respond to messages with various logic
client.on('message', message => {
    // This line prevents from the bot on answering itself
    if (message.author.bot) return;
    
    // Log all messages
    console.log("\n" + message.author.username);
    console.log("in #" + message.channel.name);
    console.log("'" + message.content + "'");
    console.log("----------");

    /* Command Message Logic */
    
    if(message.content.toLowerCase().startsWith("!execs")) {
        message.channel.send("President - James Pierce\nVice-President - Adam Bazzi\nSecretary - Kari Gignac\nTreasurer - Chris Dias");
    } else if(message.content.toLowerCase().startsWith("!help")) {
        message.channel.send("Here is a list of the available commands  :\n\n" + 
                     "**!schedule#** will display that years schedule (replace # with the number).\n\n" + 
                     "**!schedules** will display all three schedules.\n\n" +
                     "**!execs** will display the list of club executives.\n\n" + 
                     "**!help** will display this list of available commands.");
    } else if(message.content.toLowerCase().startsWith("!schedule1") || message.content.toLowerCase().startsWith("!s1")) {
        message.channel.send("First Year Schedule", {
            files: [FIRST_YEAR_SCHEDULE]
        });
    } else if(message.content.toLowerCase().startsWith("!schedule2") || message.content.toLowerCase().startsWith("!s2")) {
        message.channel.send("Second Year Schedule", {
            files: [SECOND_YEAR_SCHEDULE]
        });
    } else if(message.content.toLowerCase().startsWith("!schedule3") || message.content.toLowerCase().startsWith("!s3")) {
        message.channel.send("First Year Schedule", {
            files: [THIRD_YEAR_SCHEDULE]
        });
    } else if(message.content.toLowerCase().startsWith("!schedules") || message.content.toLowerCase().startsWith("!ss")) {
        message.channel.send("All Schedules", {
            files: CLASS_SCHEDULES
        });
    } else if (message.content.toLowerCase().startsWith("!bang")) {
        message.channel.send("Duckhunt has not been implemented yet. Keep your eyes peeled ;)");
    } else if (message.content.toLowerCase().startsWith("!rooms")) {
        message.channel.send("All Room Schedules", {
            files: ROOM_SCHEDULES
        })
    } else if (message.content.toLowerCase().startsWith("!room52")) {
        message.channel.send("Room 52:", { 
            files: [ROOM_52_SCHEDULE]
        });
    } else if (message.content.toLowerCase().startsWith("!room55")) {
        message.channel.send("Room 55:", { 
            files: [ROOM_55_SCHEDULE]
        });
    } else if (message.content.toLowerCase().startsWith("!room61")) {
        message.channel.send("Room 61:", { 
            files: [ROOM_61_SCHEDULE]
        });
    }
    
    /* Messaging Logic that is separate from normal commands */
    // If the message contains 'android'
    if (message.content.toLowerCase().includes('android')) {
        // Send "pong" to the same channel
        message.channel.send('R dot ID dot');
    }
    if (message.content.toLowerCase().includes('swift')) {
        // Send "pong" to the same channel
        message.channel.send('Are you using Kotlin?');
    }
    if (message.content.toLowerCase().includes('dramamine')) {
        // Send "pong" to the same channel
        message.channel.send('If I get 1000 people to join the Dollar Shave Club, I get 83 years of free razers.');
    }
    if (message.content.toLowerCase().includes('gucci')) {
        // Send "pong" to the same channel
        message.channel.send('Did you go to bed last night?');
    }
    if (message.content.toLowerCase().includes('gucci gang')) {
        // Send "pong" to the same channel
        message.channel.send('Gucci gang, Gucci gang, Gucci gang, Gucci gang\nGucci gang, Gucci gang, Gucci gang (Gucci gang!)');
    }
    if (message.content.toLowerCase().includes('kanye')) {
        // Send "pong" to the same channel
        message.channel.send('Buy some Kanye Coin!');
    }
    if (message.content.toLowerCase().includes('slurp') && message.author.id !== client.user.id) {
        // Send "pong" to the same channel
        message.channel.send('You up for a slup?');
    }
    if (message.content.toLowerCase().includes('diesel')) {
        // Send "pong" to the same channel
        message.channel.send('Gotta drink that Mid');
    }
    // Only respond to this if this message was not sent by the bot
    if (message.content.toLowerCase().includes('rinsed') && message.author.id !== client.user.id) {
        // Send "pong" to the same channel
        message.channel.send('I got Rinsed!');
    }

    /* JarrodNoises Area*/
    messageCount++;
    
    if(messageCount === restartCount) {
        // Only sends this message if the last message was not sent by the bot
        if(message.author.id !== client.user.id){
            message.channel.send("You've got to be kidding me!"); // Send a message after every 5th message after .5 seconds
            messageCount = 0;
            restartCount = Math.floor(Math.random() * 25) + 5;
            console.log("messages until next JarrodNoise: " + restartCount);
        } else {
            messageCount--;
        }
    }
    
});

/* Working, but not needed */
/*client.on("presenceUpdate", function(oldPresence, newPresence) {
    
    
	console.log(oldPresence.user.username + " was " + oldPresence.presence.status);
	console.log(newPresence.user.username + " is " + newPresence.presence.status + "\n");
    
});*/


// Respond to the bot disconnecting
client.on("disconnect", () => {
    console.log("Bot disconnected!");
});

/* Function Declarations */

/* Log In */
// Log our bot in
client.login(token);