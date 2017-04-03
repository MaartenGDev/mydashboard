import express from 'express';
const router = express.Router();
import {Collection} from '../src/schemas/mongooseSchemas';
import CollectionDataApi from '../src/api/CollectionDataApi';

router.get('/:Id', (req, res, next) => {
    const {Id} = req.params;

    Collection
        .findById(Id)
        .populate('type')
        .exec((err, collection) => {
            if (err) throw err;

            return res.json(collection);

        });
});

router.get('/', (req, res) => {
    Collection
        .find()
        .populate('type')
        .exec((err, collections) => {
            const populatedCollections = collections.map(function (collection) {
                let currentCollection = Object.assign({}, collection);

                currentCollection._doc.items = CollectionDataApi.getDataFromSource(collection.source);;

                return currentCollection._doc;

            });

            res.json(populatedCollections);
        });
});

router.patch('/:Id', (req, res) => {
    const {Id} = req.params;
    const {name, type, source} = req.body;

    const collection = {name, type, source};

    Collection.findOneAndUpdate({_id: Id}, collection, {upsert: true, new: true}, (err, collection) => {
        if (err) throw err;

        res.json({status: 'OK', collection});
    });
});

router.post('/', (req, res) => {
    const {name, type, source} = req.body;

    if (name === undefined || type === undefined || source === undefined) return res.json({error: 'Bad Request'});

    let currentCollection = new Collection({name, type, source});

    currentCollection.save((err, collection) => {
        if (err) throw err;

        res.json({status: 'OK', collection});
    });
});

export default router;