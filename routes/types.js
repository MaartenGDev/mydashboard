import express from 'express';
const router = express.Router();
import {Type} from './../src/schemas/mongooseSchemas';

router.get('/', (req, res) => {
    Type.find((err, collections) => {
        return res.json(collections);
    });
});

router.post('/', (req, res) => {
    const {name} = req.body;

    if (name === undefined) return res.json({error: 'Bad Request'});

    let type = new Type({name});

    type.save((err, type) => {
        if (err) throw err;

        res.json({status: 'OK', type});
    });
});

export default router;