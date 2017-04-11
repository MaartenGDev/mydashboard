import connection from '../Database';

module.exports = () => {
    connection.query(`
        CREATE TABLE IF NOT EXISTS type_categories (
        id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(25) NOT NULL);`
    );
};
