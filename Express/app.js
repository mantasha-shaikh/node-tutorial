const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('user hit resource');
    res.status(200).send('hello');
});

app.get('/about', (req, res) => {
    res.status(200).send('About Page');
});

app.all('/*splat', (req, res) => {
    res.status(404).send('<h1>error </h1>');
});

app.listen(5000,() => {
    console.log('server is listening on port 5000');
});
