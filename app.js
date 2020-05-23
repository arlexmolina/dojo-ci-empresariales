const express = require('express');
const app = express();
const calculator = require('./calculator');

app.get('/add', (req, res) => {
    res.json({
        result: calculator.add(parseInt(req.query.value1),parseInt(req.query.value2))
    });
});

app.get('/subtract', (req, res) => {
    res.json({
        result: calculator.subtract(parseInt(req.query.value1),parseInt(req.query.value2))
    });
});

module.exports = app;
