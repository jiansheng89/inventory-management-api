function productSchema() {

    var mongoose = require(__base + 'config/db').mongoose;
    var ObjectId = mongoose.Schema.Types.ObjectId;

    var schema = {
        name: String,
        price: Number,
        recipe: [{
            _id: ObjectId,
            name: String,
            requiredAmount: Number
        }]
    };

    var collectionName = 'product';
    var feedbackSchema = mongoose.Schema(schema);
    var feedback = mongoose.model(collectionName, feedbackSchema);

    return feedback;
}

module.exports = productSchema();
