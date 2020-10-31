const express = require('express');
const app = express();
const port = 3000;

const isBoolean = true;
const num = 2020;
const str = 'This is string';
const empty = null;
const obj = {
    name: 'Artem',
    status: 'trainee'
}

app.get('/', (req, res) => {
    res.send(`
        <h2>name: ${obj.name}</h2>
        <h2>status: ${obj.status}</h2>   
    `);
});

app.get('/empty', (req, res) => {
    res.send(`${empty}`);
});

app.get('/str', (req, res) => {
    res.send(str);
});

app.get('/num', (req, res) => {
    res.send(`${num}`);
});

app.get('/bool', (req, res) => {
    res.send(isBoolean);
});

app.listen(port);