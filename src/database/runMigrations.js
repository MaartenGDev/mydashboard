import connection from './Database';

import path from 'path';
import fs from 'fs';

const migrationsPath = path.join(__dirname, 'migrations');
const hiddenFiles = ['Migration.js'];

fs.readdir(migrationsPath, (err, files) => {
    if(err) throw err;

    files.forEach(file => {
        if(hiddenFiles.includes(file)) return;

        const migration = require(path.join(migrationsPath, file))();

        console.log(`Migrated: ${file}`);
    });

    connection.end();
});

