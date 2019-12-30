var salesSchema = require(__base + 'models/salesSchema');
var productSchema = require(__base + 'models/productSchema');
var inventorySchema = require(__base + 'models/inventorySchema');
var outletSchema = require(__base + 'models/outletSchema');
var employeeSchema = require(__base + 'models/employeeSchema');
var mongoose = require(__base + 'config/db').mongoose;

function findSchema(entity) {
    switch (entity) {
        case 'sales':
            return salesSchema;
        case 'product':
            return productSchema;
        case 'inventory':
            return inventorySchema;
        case 'outlet':
            return outletSchema;
        case 'employee':
            return employeeSchema;
        default:
            return false;
    }
}
// Retrieve and return all notes from the database.
exports.retrieveAll = (req, res) => {
    let schema = findSchema(req.params.entity);
    if (schema) {
        schema.find({}, function (err, parking) {
            if (err) return res.json(err);
            res.json(parking);
        })
    } else {
        res.status(503);
        res.send();
    }
};

exports.retrieveOne = (req, res) => {
    let schema = findSchema(req.params.entity);
    if (schema) {
        schema.findOne({ _id: mongoose.mongo.ObjectId(req.params.id) }, function (err, parking) {
            if (err) return res.json(err);
            res.json(parking);
        })
    } else {
        res.status(503);
        res.send();
    }
};

exports.create = (req, res) => {
    let schema = findSchema(req.params.entity);
    if (schema) {
        schema.create(req.body, function (err, parking) {
            if (err) return res.json(err);
            res.json(parking);
        })
    } else {
        res.status(503);
        res.send();
    }

};

exports.update = (req, res) => {
    let schema = findSchema(req.params.entity);
    if (schema) {
        schema.update({ _id: mongoose.mongo.ObjectId(req.params.id) }, req.body, { overwrite: true }, function (err, parking) {
            if (err) return res.json(err);
            res.json(parking);
        })
    } else {
        res.status(503);
        res.send();
    }
};

exports.delete = (req, res) => {
    let schema = findSchema(req.params.entity);
    if (schema) {
        schema.deleteOne({ _id: mongoose.mongo.ObjectId(req.params.id) }, function (err, parking) {
            if (err) return res.json(err);
            res.json(parking);
        })
    } else {
        res.status(503);
        res.send();
    }
};