var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;

var database = null;
var collection = null;

// Connect to the db
mongoClient.connect("mongodb://localhost:27017/moba3db", function (err, db) {
    if (err) return console.log(err);

    console.log("connected to database");
    database = db;
    collection = db.collection('products');
});

// TODO filter / range
router.get('/', function (req, res, next) {
    collection.find({}).toArray(function (error, result) {
        if (error) res.send(error);
        else res.send(JSON.stringify(result));
    });
});

router.post('/', function (req, res, next) {
    var product = req.body.product;

    if (!product.name) return res.send('{ "err": "product name is missing" }');
    if (!product.price) return res.send('{ "err": "product price is missing" }');
    if (!product.description) return res.send('{ "err": "product description is missing" }');
    if (!product.category) return res.send('{ "err": "product category is missing" }');
    if (!product.amount) return res.send('{ "err": "product amount is missing" }');
    // TODO image upload on product creation
    if (!product.imageUrl) return res.send('{ "err": "product image url is missing" }');

    collection.insert(product);
    res.send("ok");
});

router.put('/:id', function (req, res, next) {
    var id = req.params.id;
    var product = req.body.product;

    if (!mongodb.ObjectId.isValid(id)) return res.send('{ "err": "Given id is not of matching to an ObjectId of MongoDB" }');
    if (!product.name) return res.send('{ "err": "product name is missing" }');
    if (!product.price) return res.send('{ "err": "product price is missing" }');
    if (!product.description) return res.send('{ "err": "product description is missing" }');
    if (!product.category) return res.send('{ "err": "product category is missing" }');
    if (!product.amount) return res.send('{ "err": "product amount is missing" }');
    // TODO image upload on product creation
    if (!product.imageUrl) return res.send('{ "err": "product image url is missing" }');

    try {
        collection.updateOne(
            { "_id" : mongodb.ObjectId(id) },
            { $set: product },
            { upsert: true }
        );
    } catch (e) {
        console.log(e);
    }
    res.send("ok");
});


router.delete('/:id', function (req, res, next) {
    var id = req.params.id;

    if (!mongodb.ObjectId.isValid(id)) return res.send('{ "err": "Given id is not of matching to an ObjectId of MongoDB" }');
    
    collection.deleteOne({"_id": mongodb.ObjectId(id)}, function (error, collection) {
        if (error) return res.send(error);

        // here we are able to check if a document was deleted or not
        console.log(collection.deletedCount);
    });
    res.send("ok");
});

module.exports = router;
