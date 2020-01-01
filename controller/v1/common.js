var salesSchema = require(__base + 'models/salesSchema');
var productSchema = require(__base + 'models/productSchema');
var inventorySchema = require(__base + 'models/inventorySchema');
var outletSchema = require(__base + 'models/outletSchema');
var employeeSchema = require(__base + 'models/employeeSchema');
var mongoose = require(__base + 'config/db').mongoose;

exports.dashboardInfo = (req, res) => {
    var asyncCount = 0;
    var response = {
        sales: 0,
        product: 0,
        inventory: [],
        outlet: 0,
        employee: 0
    }
    salesSchema.countDocuments({}, function (err, count) {
        if (err) return res.json(err);
        response.sales = count;
        asyncCount++;
        if (asyncCount == 5){
            res.json(response);
        }
    })
    productSchema.countDocuments({}, function (err, count) {
        if (err) return res.json(err);
        response.product = count;
        asyncCount++;
        if (asyncCount == 5){
            res.json(response);
        }
    })
    inventorySchema.find({}, function (err, count) {
        if (err) return res.json(err);
        response.inventory = count;
        asyncCount++;
        if (asyncCount == 5){
            res.json(response);
        }
    }).sort({
        'totalQualtity': 1 
    })
    outletSchema.countDocuments({}, function (err, count) {
        if (err) return res.json(err);
        response.outlet = count;
        asyncCount++;
        if (asyncCount == 5){
            res.json(response);
        }
    })
    employeeSchema.countDocuments({}, function (err, count) {
        if (err) return res.json(err);
        
        response.employee = count;
        asyncCount++;
        if (asyncCount == 5){
            res.json(response);
        }
    })



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