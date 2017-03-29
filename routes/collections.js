const express = require('express');
const router = express.Router();
import Collection from './../src/schemas/mongooseSchemas';

router.get('/:Id', (req, res, next) => {
    const {Id} = req.params;

    Collection.findById(Id,(err, collection) => {
       if(err) throw err;

       return res.json(collection);
    });
});

router.post('/', (req, res) => {
    const {name, source} = req.body;

    if (name === undefined || source === undefined) return res.json({error: 'Bad Request'});

    let currentCollection = new Collection({name, source});

    currentCollection.save((err, collection) => {
        if (err) throw err;

        res.json({status: 'OK', collection});
    });
});

module.exports = router;