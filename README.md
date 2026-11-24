
# Employee Task Management API

A REST API built using Node.js, Express.js, MongoDB, and Mongoose to manage employee tasks.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman
- Swagger (OpenAPI)

## Features

- Create a new task
- Get all tasks
- Filter tasks by status
- Get a task by ID
- Update a task
- Delete a task
- Automatic createdAt and updatedAt timestamps
- API documentation using Swagger

## Project Structure

```text
employee-task-management-api/
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── swagger.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── taskModel.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── middleware/
│   ├── app.js
│   └── server.js
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Go to the project folder:

```bash
cd employee-task-management-api
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root folder:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/employee_task_management
```

## Run the Server

```bash
node src/server.js
```

Server runs at:

```text
http://localhost:5000
```

## Swagger Documentation

Open:

```text
http://localhost:5000/api-docs
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/tasks | Create task |
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks?status=TODO | Filter tasks |
| GET | /api/tasks/:id | Get task by ID |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

## Task Fields

- title: Required string
- description: Optional string
- assignedTo: Required string
- priority: LOW, MEDIUM, HIGH
- status: TODO, IN_PROGRESS, BLOCKED, DONE
- createdAt: Automatically generated
- updatedAt: Automatically updated

## Testing

API endpoints are tested using Postman.

The exported Postman collection is included in the project.
