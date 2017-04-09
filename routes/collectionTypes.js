import express from 'express';
const router = express.Router();
import connection from '../src/database/Database';

router.get('/', (req, res) => {
    connection.query('SELECT * from collection_types', (err, collectionTypes) => {
        if(err) throw err;

        return res.json(collectionTypes);
    });
});


export default router;