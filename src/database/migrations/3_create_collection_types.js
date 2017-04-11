import connection from '../Database';

module.exports = () => {
        connection.query(`
            CREATE TABLE IF NOT EXISTS collection_types (
            id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
            category_id INT(11) NOT NULL,
            name VARCHAR(25) NOT NULL,
            FOREIGN KEY (category_id) REFERENCES type_categories(id)
           );`
        );
};
