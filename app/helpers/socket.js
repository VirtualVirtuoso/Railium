//Dependencies
const socketIo = require('socket.io');

//Export handler to instantiate or get instance
module.exports = function(server) {
    if (server) {
        io = socketIo(server);
    }
    return io;
};
