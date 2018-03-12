/**
 * Help command, Shows all the commands listed available for us
 */

 // our run command
 exports.run = (client, message, args) => {
    message.channel.send(`
Here is a list of the available commands:\n
**!currentnews** - displays the latest news from St. Clair's MAD site
**!currentevents** - displays the latest events from St. Clair's MAD events
**!room#** - displays the room schedules. (Replace # with 52, 55 or 61)
**!rooms** - displays all room schedules
**!schedule#** - will display that years schedule (replace # with the number).
**!schedules** - will display all three schedules.
**!execs** - will display the list of club executives.
**!help** - will display this list of available commands.
    `);
 }