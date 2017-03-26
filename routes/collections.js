const express = require('express');
const router = express.Router();

router.get('/:Id', (req, res, next) => {
    res.json([
        {
            title: 'hello',
            columns: [
                {
                    title: 'Column 1'
                },
                {
                    title: 'Column 2'
                },
                {
                    title: 'Column #3'
                }
            ],
            items: [
                ['Value 1 Row 0', 'Value 2 Row 0', 'Value 3 Row 0'],
                ['Value 1 Row 1', 'Value 2 Row 1', 'Value 3 Row 1'],
                ['Value 1 Row 2', 'Value 2 Row 2', 'Value 3 Row 2'],
                ['Value 1 Row 3', 'Value 2 Row 3', 'Value 3 Row 3']
            ]
        }
    ]);
});

module.exports = router;