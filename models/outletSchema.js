function outletSchema() {

    var mongoose = require(__base + 'config/db').mongoose;
    var ObjectId = mongoose.Schema.Types.ObjectId;

    var schema = {
        name: String,
        address: String,
        employee: [{
            _id: ObjectId,
            name: String,
        }]
    };

    var collectionName = 'outlet';
    var feedbackSchema = mongoose.Schema(schema);
    var feedback = mongoose.model(collectionName, feedbackSchema);

    return feedback;
}

module.exports = outletSchema();
