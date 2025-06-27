# Planty Backend API

This is a simple Express.js API for managing plant data, designed to serve as a backend for a frontend application (e.g., a Next.js app).

## Features

This API provides basic CRUD (Create, Read, Update, Delete) operations for plant entries. The data is currently stored in-memory and will not persist across server restarts.

### API Endpoints

All endpoints are accessible under the base URL (e.g., `http://localhost:3311`).

*   **GET /plants**
    *   Retrieves a list of all plant entries.
    *   Response: `[ { id: Number, name: String, species: String, age: Number, health: String }, ... ]`

*   **GET /plants/:id**
    *   Retrieves a single plant entry by its ID.
    *   Parameters: `id` (Number) - The unique identifier of the plant.
    *   Response: `{ id: Number, name: String, species: String, age: Number, health: String }` or `404 Not Found` if the plant does not exist.

*   **POST /plants**
    *   Creates a new plant entry.
    *   Request Body (JSON):
        ```json
        {
            "name": "String",    // Required
            "species": "String", // Required
            "age": "Number",     // Optional, defaults to 0
            "health": "String"   // Optional, defaults to "Unknown"
        }
        ```
    *   Response: The newly created plant object with an assigned ID (`201 Created`). Returns `400 Bad Request` if `name` or `species` are missing.

*   **PUT /plants/:id**
    *   Updates an existing plant entry.
    *   Parameters: `id` (Number) - The unique identifier of the plant to update.
    *   Request Body (JSON): Any of the plant properties (`name`, `species`, `age`, `health`).
    *   Response: The updated plant object. Returns `404 Not Found` if the plant does not exist.

*   **DELETE /plants/:id**
    *   Deletes a plant entry by its ID.
    *   Parameters: `id` (Number) - The unique identifier of the plant to delete.
    *   Response: `204 No Content` on successful deletion.

## Security Considerations

**Important:** This application currently has **no explicit security system implemented**. This means:

*   **No Authentication:** There is no mechanism to verify the identity of users.
*   **No Authorization:** All API endpoints are publicly accessible, and any client can perform any CRUD operation.
*   **No Input Validation Beyond Basic Checks:** While some basic checks for required fields are present, comprehensive input validation and sanitization are not implemented, which could lead to vulnerabilities like injection attacks.

For a production environment, it is **highly recommended** to implement robust security measures, including:
*   User authentication (e.g., JWT, OAuth).
*   Role-based access control (authorization).
*   Comprehensive input validation and sanitization.
*   Rate limiting.
*   HTTPS for all communication.

## How to Start the Application

1.  **Navigate to the backend directory:**
    ```bash
    cd /home/jason/project/plant-blog/backend
    ```

2.  **Install dependencies:**
    Ensure that you install the required Node.js packages:
    ```bash
    npm install
    ```

3.  **Start the server:**
    ```bash
    npm start
    ```
    The server will start on port `3311`. You should see a message like `Server running on port 3311` in your console.
