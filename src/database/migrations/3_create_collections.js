import connection from '../Database';

module.exports = () => {

        connection.query(`
            CREATE TABLE IF NOT EXISTS collections (
            id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(20) NOT NULL,
            source VARCHAR(100) NOT NULL,
            type_id INT(11) NOT NULL,
            user_id INT(11) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (type_id) REFERENCES collection_types(id)
           );`
        );
};

