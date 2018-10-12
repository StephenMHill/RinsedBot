const util = require('../util.js');

exports.run = (client, message, args) => {
    message.channel.send("Room 52", { files: [util.ROOM_52_SCHEDULE] });
}