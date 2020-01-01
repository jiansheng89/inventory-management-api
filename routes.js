module.exports = function (app) {

    var controller = require(__base + 'controller')
    // var controller = require(__base + 'controller')

    app.get('/', function (req, res, next) {
        res.write('API is running');
        res.end()
    });

    app.post('/', function (req, res, next) {
        res.write('API is running');
        res.end()
    });

    /**************************************** 
     * Dashboard API
    ****************************************/
    app.get('/:version/info', function (req, res, next) {
        return controller[req.params.version].common.dashboardInfo(req, res, next)
    });

    /**************************************** 
     * General CRUD API For each entity (Entity LOV: sales, product, inventory, outlet, employee)
    ****************************************/
    app.get('/:version/:entity', function (req, res, next) {
        return controller[req.params.version].crud.retrieveAll(req, res, next)
    });

    app.get('/:version/:entity/:id', function (req, res, next) {
        return controller[req.params.version].crud.retrieveOne(req, res, next)
    });

    app.post('/:version/:entity', function (req, res, next) {
        return controller[req.params.version].crud.create(req, res, next)
    });

    app.put('/:version/:entity/:id', function (req, res, next) {
        return controller[req.params.version].crud.update(req, res, next)
    });

    app.del('/:version/:entity/:id', function (req, res, next) {
        return controller[req.params.version].crud.delete(req, res, next)
    });

    // To add:
    // - API security
    // - Input value checking


};
