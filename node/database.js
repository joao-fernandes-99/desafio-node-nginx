const mysql = require('mysql');

const dbConfig = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(dbConfig);

const createPeople = () => {
    try {
        const sql = `INSERT INTO people(name) values('usertest')`;
        connection.query(sql);
    } catch (error) {
        console.log(`ERROR TO CREATE NEW PEOPLE: ${JSON.stringify(error, null, 4)}`);
    }
}

const getAllPeoples = () => {
    const sql = `SELECT * FROM people`;
    return new Promise((resolve, reject) => {
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results.map(r => { return { id: r.id, name: r.name }}));
        });
    })
}

const createTable = () => {
    const sql = 'CREATE TABLE IF NOT EXISTS people (id int NOT NULL AUTO_INCREMENT, name varchar(255), PRIMARY KEY (id))';
    connection.query(sql);
}

module.exports = {
    createPeople,
    getAllPeoples,
    createTable
}