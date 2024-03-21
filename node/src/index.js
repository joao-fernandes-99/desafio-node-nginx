const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const html = `<h1>Listagem de nomes<h1/>`;
    res.send(html);
});

app.listen(port, () => {
    console.log(`Running on: http://127.0.0.1:${port}`)
});
