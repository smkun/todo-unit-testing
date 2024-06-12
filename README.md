

# Todo Application and API Testing

This repository contains two projects:
1. A React Todo application with Test Driven Development (TDD) using Jest.
2. An Express CRUD API with TDD using Jest and Supertest.

## Todo Application (React)

### Instructions

1. **Clone the repository** and navigate to the `todo-unit-testing` directory:

    ```sh
    git clone <repository_url>
    cd todo-unit-testing
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Run the tests**:

    ```sh
    npm test
    ```

### Explanation

The React Todo application allows users to add and delete todos. It follows the TDD approach, with tests written before the implementation.

#### Tests

1. **Test: renders the todo input and button**

    - **Description**: Checks if the input field and the "Add Todo" button are rendered correctly.
    - **Expected Result**: The input field with the placeholder "Add a new todo" and the button with the text "Add Todo" should be present in the document.

2. **Test: can add a new todo**

    - **Description**: Tests if a new todo can be added to the list.
    - **Expected Result**: After typing "Learn TDD" in the input field and clicking the "Add Todo" button, the new todo should appear in the list.

3. **Test: can delete a todo**

    - **Description**: Tests if a todo can be deleted from the list.
    - **Expected Result**: After adding "Learn TDD" to the list and clicking the "Delete" button next to it, the todo should be removed from the list.

### Implementation

The main application file (`TodoApp.js`) manages the state of todos and provides functionality to add and delete todos.

## API Testing (Express)

### Instructions

1. **Navigate to the `todo-api` directory**:

    ```sh
    cd ../todo-api
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Run the tests**:

    ```sh
    npm test
    ```

### Explanation

The Express CRUD API provides endpoints to manage todos. It follows the TDD approach, with tests written before the implementation.

#### Tests

1. **Test: GET /todos**

    - **Description**: Checks if the GET endpoint returns the list of todos.
    - **Expected Result**: The endpoint should return a status code of 200 and an empty array initially.

2. **Test: POST /todos**

    - **Description**: Tests if a new todo can be added using the POST endpoint.
    - **Expected Result**: After sending a POST request with a new todo (`{ todo: 'Learn TDD' }`), the endpoint should return a status code of 201 and the new todo.

3. **Test: DELETE /todos/:index**

    - **Description**: Tests if a todo can be deleted using the DELETE endpoint.
    - **Expected Result**: After adding a new todo and sending a DELETE request to `/todos/0`, the endpoint should return a status code of 204 and the todo should be removed from the list.

### Implementation

The main application file (`app.js`) sets up the Express server and defines the routes for managing todos.

---

### Project Structure

```
/todo-unit-testing
  ├── src
  │   ├── setupTests.js        # Jest setup file
  │   ├── TodoApp.js           # React Todo application
  │   └── TodoApp.test.js      # Tests for React Todo application
  ├── package.json             # Project configuration and scripts
  └── ...

/todo-api
  ├── app.js                   # Express application
  ├── app.test.js              # Tests for Express application
  ├── package.json             # Project configuration and scripts
  └── ...
```

### Expected Results

- **React Todo Application Tests**: All tests should pass, verifying that the input field, add button, and delete functionality work as expected.
- **Express CRUD API Tests**: All tests should pass, verifying that the API correctly handles GET, POST, and DELETE requests.

This setup ensures both the React front-end and the Express back-end are fully tested and functioning correctly following the principles of TDD.