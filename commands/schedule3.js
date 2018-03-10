/**
 * Shows a schedule of the 3rd year
 * @param {*} client 
 * @param {*} message 
 * @param {*} args 
 */

const util = require('../util.js');

exports.run = (client, message, args) => {
    message.channel.send("Third Year Schedule", { files: [util.THIRD_YEAR_SCHEDULE] });
}