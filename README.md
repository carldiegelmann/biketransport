# Manage Biketransports

A full-stack application with a Kotlin-based backend and an Angular 19 frontend. This project demonstrates how to build a web application that connects a Kotlin REST API with an Angular 19 frontend, showcasing the integration between both technologies.

## Features

- **Kotlin Backend**:
  - RESTful API with endpoints for CRUD operations.
  - Built with Kotlin, Spring Boot, and exposed as a REST service.
  - Secure endpoints with authentication and role-based access control.
- **Angular Frontend**:
  - Interactive UI with Angular 19.
  - Material Design components for a modern and responsive layout.
  - Uses services to handle HTTP requests to the backend.

## Prerequisites

Before setting up and running the project, ensure you have the following installed:

- **Backend**:

  - Java 11 or higher
  - Kotlin 1.5 or higher
  - Gradle 7 or higher

- **Frontend**:
  - Node.js (v14.x or higher)
  - npm (v6.x or higher)
  - Angular CLI (v12.x or higher)

## Backend Setup (Kotlin)

Follow these steps to set up the Kotlin backend:

1. Clone the repository:

   git clone https://github.com/your-username/project-name.git
   cd project-name/backend

2. Install dependencies:

Make sure Gradle is installed and properly set up for your system.
Configure the database:

3. Update the application.properties file with your database credentials.

4. Build and run the backend:
   ./gradlew bootRun

5. The backend will be running on http://localhost:8080

## Frontend Setup (Angular 19)

To set up the Angular frontend:

Navigate to the frontend directory:

cd frontend
Install the required npm dependencies:

npm install
Start the Angular development server:

ng serve
The frontend will be running on http://localhost:4200.

## Running the Application

Once both the backend and frontend are set up, you can run the entire application by following these steps:

Ensure the backend is running at http://localhost:8080.
Start the Angular development server at http://localhost:4200.
The frontend should now be able to make API calls to the Kotlin backend, and you can interact with the application via the browser.

## API Documentation

Here’s a quick overview of the API endpoints available on the backend:

### 1. **GET /api/orders**

Retrieves a list of transport orders.

### 1. **POST /api/orders**

Post a new order to the backend

curl -X POST -H "Content-Type: application/json" -d '{
"customer": "John Doe",
"startLocation": "Berlin",
"destination": "Munich",
"motorcycleType": "Sport",
"transportDate": "2025-01-15"
}' http://localhost:8080/api/orders

### 3. \*\*PUT /api/orders/{id}/status

Sets a new status for a transport order.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
