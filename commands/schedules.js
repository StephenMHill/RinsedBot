/**
 * Shows a schedule of the all years
 * @param {*} client 
 * @param {*} message 
 * @param {*} args 
 */

const util = require('../util.js');

exports.run = (client, message, args) => {
    message.channel.send("All Schedules", { files: util.CLASS_SCHEDULES });
}