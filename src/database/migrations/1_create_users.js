import connection from '../Database';

module.exports = () => {
    connection.query(`
        CREATE TABLE IF NOT EXISTS users (
        id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(25) NOT NULL,
        email VARCHAR(25) NOT NULL,
        password VARCHAR(255) NOT NULL);`
    );
};