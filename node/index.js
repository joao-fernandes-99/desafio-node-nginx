const express = require('express');
const app = express();
const port = 3000;
const { createPeople, getAllPeoples, createTable } = require('./database');
const { htmlBuilder } = require('./html-builder');

createTable();

app.get('/', async (req, res) => {
    createPeople();
    const peoples = await getAllPeoples();
    const html = htmlBuilder(peoples);
    res.send(html);
});

app.listen(port, () => {
    console.log(`Running on: http://127.0.0.1:${port}`)
});
