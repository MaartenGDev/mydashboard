import express from 'express';
const router = express.Router();
import {Collection} from './../src/schemas/mongooseSchemas';

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
            return res.json(collections);
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