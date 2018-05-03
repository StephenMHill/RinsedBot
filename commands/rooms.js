
const util = require('../util.js');

exports.run = (client, message, args) => {
    message.channel.send("All Room Schedules", { files: !util.ROOM_SCHEDULES });
}