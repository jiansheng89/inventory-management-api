function employeeSchema() {

    var mongoose = require(__base + 'config/db').mongoose;

    var schema = {
        name: String,
        adalToken: String,
        email: String,
        phoneNumber: String,
        outlet: [],
        permissions: [],
        createdAt: String,
        lastLogin: Date,
        active: Boolean
    };

    var collectionName = 'employee';
    var employeeSchema = mongoose.Schema(schema);
    var employee = mongoose.model(collectionName, employeeSchema);

    return employee;
}

module.exports = employeeSchema();
