// src/TodoApp.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp';

test('renders the todo input and button', () => {
    render(<TodoApp />);
    expect(screen.getByPlaceholderText(/add a new todo/i)).toBeInTheDocument();
    expect(screen.getByText(/add todo/i)).toBeInTheDocument();
});

test('can add a new todo', () => {
    render(<TodoApp />);
    fireEvent.change(screen.getByPlaceholderText(/add a new todo/i), {
        target: { value: 'Learn TDD' }
    });
    fireEvent.click(screen.getByText(/add todo/i));
    expect(screen.getByText(/learn tdd/i)).toBeInTheDocument();
});

test('can delete a todo', () => {
    render(<TodoApp />);
    fireEvent.change(screen.getByPlaceholderText(/add a new todo/i), {
        target: { value: 'Learn TDD' }
    });
    fireEvent.click(screen.getByText(/add todo/i));
    fireEvent.click(screen.getByText(/delete/i));
    expect(screen.queryByText(/learn tdd/i)).not.toBeInTheDocument();
});
