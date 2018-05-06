/**
 * Shows a schedule of the 1st year
 * @param {*} client 
 * @param {*} message 
 * @param {*} args 
 */

const util = require('../util.js');

exports.run = (client, message, args) => {
    message.channel.send("First Year Schedule", { files: [util.FIRST_YEAR_SCHEDULE] });
}