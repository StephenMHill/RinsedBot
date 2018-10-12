const util = require('../util.js');

exports.run = (client, message, args) => {
    message.channel.send("Room 55", { files: [util.ROOM_55_SCHEDULE] });
}