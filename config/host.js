'use strict';

//Server cerdentials
exports.serverHost = {
    port: (typeof process.env.LISTEN_PORT == 'undefined') ? 4000 : process.env.LISTEN_PORT,
    mongodb: 'mongodb+srv://parklinkadmin:ParklinkAdmin@cluster0-kuspq.azure.mongodb.net/InventoryManagement?retryWrites=true&w=majority&authSource=admin',
}
