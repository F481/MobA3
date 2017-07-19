var express = require('express');
var router = express.Router();

/* GET all products */
router.get('/', function (req, res, next) {
    //res.send('respond with a resource');
    // TODO
});

router.post('/', function (req, res, next) {
    // req.body includes params
});

router.put('/:id', function (req, res, next) {
    // req.params.id
    // TODO update product by id
});

router.delete('/:id', function (req, res, next) {
    // TODO delete product by id
});

module.exports = router;
