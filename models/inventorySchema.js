function inventorySchema() {

    var mongoose = require(__base + 'config/db').mongoose;
    var ObjectId = mongoose.Schema.Types.ObjectId;

    var schema = {
        name: String,
        cost: Number,
        quantity: [{
            _id: ObjectId,
            name: String,
            amount: Number
        }],
        totalQualtity: Number,
        alertCount: Number,
        relatedProduct:[{
            _id: ObjectId,
            name: String,
            requiredAmount: Number
        }]
    };

    var collectionName = 'inventory';
    var inventorySchema = mongoose.Schema(schema);
    var inventory = mongoose.model(collectionName, inventorySchema);


    return inventory;
}

module.exports = inventorySchema();
