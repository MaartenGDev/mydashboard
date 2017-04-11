import express from 'express';
const router = express.Router();
import connection from '../src/database/Database';

router.get('/', (req, res) => {
  const allTypesWithCategory = `
    SELECT type.id as id,
    type.name as name,
    category.name as category
    FROM collection_types AS type
    LEFT JOIN type_categories as category ON type.category_id=category.id`;

    connection.query(allTypesWithCategory, (err, collectionTypes) => {
        if(err) throw err;

        return res.json(collectionTypes);
    });
});


export default router;
