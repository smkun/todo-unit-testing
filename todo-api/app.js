// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const todos = [];

app.get('/todos', (req, res) => {
    res.status(200).json(todos);
});

app.post('/todos', (req, res) => {
    const todo = { todo: req.body.todo };
    todos.push(todo);
    res.status(201).json(todo);
});

app.delete('/todos/:index', (req, res) => {
    const index = req.params.index;
    todos.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;
