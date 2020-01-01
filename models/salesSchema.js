function salesSchema() {

    var mongoose = require(__base + 'config/db').mongoose;
    var ObjectId = mongoose.Schema.Types.ObjectId;

    var schema = {
        salesId: String,
        totalSales: Number,
        salesItem: [],
        salesDate: Date,
    };

    var collectionName = 'sales';
    var appinfoSchema = mongoose.Schema(schema);
    var appinfo = mongoose.model(collectionName, appinfoSchema);

    return appinfo;
}

module.exports = salesSchema();
