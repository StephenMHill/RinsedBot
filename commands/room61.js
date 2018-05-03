const util = require('../util.js');

exports.run = (client, message, args) => {
    message.channel.send("Room 61", { files: util.ROOM_61_SCHEDULE });
}