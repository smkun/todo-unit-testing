// app.test.js
const request = require('supertest');
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

test('GET /todos', async () => {
    const response = await request(app).get('/todos');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
});

test('POST /todos', async () => {
    const newTodo = { todo: 'Learn TDD' };
    const response = await request(app).post('/todos').send(newTodo);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(newTodo);
});

test('DELETE /todos/:index', async () => {
    await request(app).post('/todos').send({ todo: 'Learn TDD' });
    const response = await request(app).delete('/todos/0');
    expect(response.statusCode).toBe(204);
});
