/**
 * Help command, Shows all the commands listed available for us
 */

 // our run command
 exports.run = (client, message, args) => {
    message.channel.send(`
Here is a list of the available commands:\n
**!schedule#** will display that years schedule (replace # with the number).\n
**!schedules** will display all three schedules.\n
**!execs** will display the list of club executives.\n
**!help** will display this list of available commands.
    `);
 }