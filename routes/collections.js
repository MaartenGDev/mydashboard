import express from 'express';
const router = express.Router();
import connection from '../src/database/Database';

import {Collection} from '../src/schemas/mongooseSchemas';
import CollectionDataApi from '../src/api/CollectionDataApi';


router.get('/', (req, res) => {
    connection.query('SELECT * from collections', (error, collections) => {
        if (error) throw error;

        const populatedCollections = collections.map(collection => {
            return new Promise(resolve => {
                CollectionDataApi.getDataFromSource(collection.source).then(items => {
                    collection.items = items;

                    resolve(collection);
                });
            });
        });

        Promise.all(populatedCollections)
            .then(collections => res.json(collections));
    });
});

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const {name, type_id, source} = req.body;
    const userId = req._user.id;

    const collection = {id, name, type_id, source};

    connection.query('UPDATE collections SET name=?, type_id=?, source=? WHERE id=? AND user_id=?', [name, type_id, source, id, userId], (err, rows, fields) => {
        if (err) throw err;

        res.send(collection);
    });
});

router.post('/', (req, res) => {
    const {name, type_id, source} = req.body;
    const userId = req._user.id;

    if (name === undefined || type_id === undefined || source === undefined) return res.json({error: 'Bad Request'});

    let collection = {name, type_id, source};


    connection.query('INSERT INTO collections (name, type_id, source, user_id) VALUES(?,?,?,?)', [name, type_id, source, userId], (err, results, fields) => {
        if (err) throw err;

        collection.id = results.insertId;

        res.send(collection);
    });
});

export default router;