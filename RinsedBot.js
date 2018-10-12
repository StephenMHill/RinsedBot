/*
  A bot for the MAD Club Discord. Written in Discord.js
*/
/* Variables */
// setup clusters
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    for (let i=0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Listen for dying workers
    cluster.on('exit', function (worker) {

        // Replace the dead worker,
        // we're not sentimental
        console.log('Worker %d died. Respawning new worker!', worker.id);
        cluster.fork();

    });

} else {
    // Import the discord.js module
    // Create an instance of a Discord client
    const Discord = require('discord.js');
    const client = new Discord.Client();

    // File path finding
    var glob = require('glob');

    // Get a list of commands from the commands folder
    // This probably needs refactoring but that's ok
    var commandList = glob.sync("./commands/*.js").map((file) => {
        return file.split("/")[2].split(".")[0];
    });

    // Import all settings from the conf.js file
    var settings = require('./conf.js');

    // Declare variables from the conf.js file
    const token = settings.token;

    // Other Settings
    // var messageCount = 0;
    // var restartCount = Math.floor(Math.random() * 25) + 5; // Sets a minimum of 5, maximum of 30
    // var buzzword = require('./plugins/buzzword.js');

    /* Events */
    // This will run when the bot is connected and ready
    client.on('ready', () => {
        console.log("Connected!");
        console.log("Logged in as: ");
        console.log(`${client.user.username} - ${client.user.id})`);
        
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

        // Output all servers(guilds) that the bot is currently in
        client.guilds.forEach(function(guild) {
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

        // this is a way to get the arguments we need in a command just in case we want to go through
        const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        // Attempt to load and run the files for us to use
        // This will avoid the many if-else statements
        // We're using a let in here to ref the local scope, so it's not going to be a big deal.
        if (commandList.indexOf(command) !== -1) {
            try {
                let commandFile = require(`./commands/${command}.js`);
                commandFile.run(client, message, args);
            } catch (err) {
                console.error(err);
            }
        }


        // This is used to send messages in reponse to certain buzzwords. Removed to reduce spam.
        
        /* Messaging Logic that is separate from normal commands */
        
        //buzzword.run(message);

        
        
        
        // This has been commented out to reduce spam.
        
        // This will cause the bot to respond to every Xth message, where X is randomly chosen.
        
        /* JarrodNoises Area*/
        /*messageCount++;
        
        if(messageCount === restartCount) {
            // Only sends this message if the last message was not sent by the bot

            message.channel.send("You've got to be kidding me!"); // Send a message after every 5th message after .5 seconds
            messageCount = 0;
            restartCount = Math.floor(Math.random() * 25) + 5;
            console.log("messages until next JarrodNoise: " + restartCount);
        }*/
        
    });


    // Respond to the bot disconnecting
    client.on("disconnect", () => {
        console.log("Bot disconnected!");
    });

    /* Function Declarations */

    /* Log In */
    // Log our bot in
    client.login(token);

    console.log('Worker %d running!', cluster.worker.id);
}