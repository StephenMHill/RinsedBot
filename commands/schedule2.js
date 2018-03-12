/**
 * Shows a schedule of the 2nd year
 * @param {*} client 
 * @param {*} message 
 * @param {*} args 
 */

const util = require('../util.js');

exports.run = (client, message, args) => {
    message.channel.send("Second Year Schedule", { files: [util.SECOND_YEAR_SCHEDULE] });
}