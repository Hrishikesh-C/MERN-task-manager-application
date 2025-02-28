<<<<<<< HEAD
Task Management Application
A flexible, user-centric task management platform built with the MERN stack that allows users to create, organize, and customize their workflow according to their specific needs.
Overview
This application empowers users to take control of their productivity through seamless organization and customization. Create, track, and modify tasks with ease, adapting the system to your unique workflow rather than forcing you to conform to rigid structures.
The clean interface allows you to categorize tasks, set priorities, and establish deadlines without unnecessary complexity. As your needs evolve, so does our platform—modify task attributes, adjust deadlines, or completely restructure your organization system with just a few clicks.
Technology Stack
Frontend

React.js: A JavaScript library for building user interfaces, providing a component-based architecture for efficient UI development and state management
Tailwind CSS: A utility-first CSS framework that enables rapid UI development with predefined classes for styling components
Redux: State management library for maintaining application-wide state
Axios: Promise-based HTTP client for making API requests to the backend
React Router: For navigation and routing between different views

Backend

Node.js: JavaScript runtime environment that executes server-side code
Express.js: Web application framework for Node.js that simplifies API creation and middleware integration
MongoDB: NoSQL database for storing task data, user information, and application settings
Mongoose: ODM (Object Data Modeling) library for MongoDB that provides schema validation and database interaction
JSON Web Tokens (JWT): For secure authentication and authorization

Architecture
The application follows a standard MERN architecture:

Client Layer: React application bundled with Webpack that communicates with the backend API
API Layer: Express.js routes that handle HTTP requests from the client
Service Layer: Business logic and data processing
Data Access Layer: Mongoose models and queries for database operations
Database: MongoDB collections for tasks, users, and settings

Data Flow

User interacts with the React frontend
React components dispatch actions based on user input
API calls are made to Express.js endpoints
Backend validates requests and performs database operations via Mongoose
MongoDB stores or retrieves the requested data
Response is sent back to the frontend
React updates the UI accordingly
=======
# MERN Task Manager

A MERN application for basic tasks management.
![image](https://user-images.githubusercontent.com/86913048/227101123-f8a35258-9c21-4479-86e8-055659ab75e2.png)

## Table of Contents

- [Features](#features)
- [Tools and Technologies](#tools-and-technologies)
- [Dependencies](#dependencies)
- [Dev-dependencies](#dev-dependencies)
- [Prerequisites](#prerequisites)
- [Installation and setup](#installation-and-setup)
- [Backend API](#backend-api)
- [frontend pages](#frontend-pages)
- [npm scripts](#npm-scripts)
- [Useful Links](#useful-links)
- [Contact](#contact)

## Features

### User-side features

- Signup
- Login
- Logout
- Add tasks
- View tasks
- Update tasks
- Delete tasks

### Developer-side features

- Toasts for success and error messages
- Form validations in frontend and backend
- Fully Responsive Navbar
- Token based Authentication
- Use of 404 page for wrong urls
- Relevant redirects
- Global user state using Redux
- Custom Loaders
- Use of layout component for pages
- Use of theme colors
- No external CSS files needed (made using Tailwind CSS)
- Usage of Tooltips
- Dynamic document titles
- Redirect to previous page after login
- Use of various React hooks
- Custom hook also used (useFetch)
- Routes protection
- Middleware for verifying the user in backend
- Use of different HTTP status codes for sending responses
- Standard pratices followed

## Tools and Technologies

- HTML
- CSS
- Javascript
- Tailwind CSS
- Node.js
- Express.js
- React
- Redux
- Mongodb

## Dependencies

Following are the major dependencies of the project:

- axios
- react
- react-dom
- react-redux
- react-router-dom
- react-toastify
- redux
- redux-thunk
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose

## Dev-dependencies

Following are the major dev-dependencies of the project:

- nodemon
- concurrently

## Prerequisites

- Node.js must be installed on the system.
- You should have a MongoDB database.
- You should have a code editor (preferred: VS Code)

## Installation and Setup

1. Install all the dependencies

   ```sh
   npm run install-all
   ```

2. Create a file named ".env" inside the backend folder. Add data from .env.example file and substitute your credentials there.

3. Start the application

   ```sh
   npm run dev
   ```

4. Go to http://localhost:3000

## Backend API

<pre>
- POST     /api/auth/signup
- POST     /api/auth/login
- GET      /api/tasks
- GET      /api/tasks/:taskId
- POST     /api/tasks
- PUT      /api/tasks/:taskId
- DELETE   /api/tasks/:taskId
- GET      /api/profile
</pre>

## Frontend pages

<pre>
- /                 Home Screen (Public home page for guests and private dashboard (tasks) for logged-in users)
- /signup           Signup page
- /login            Login page
- /tasks/add        Add new task
- /tasks/:taskId    Edit a task
</pre>

## npm scripts

At root:

- `npm run dev`: Starts both backend and frontend
- `npm run dev-server`: Starts only backend
- `npm run dev-client`: Starts only frontend
- `npm run install-all`: Installs all dependencies and dev-dependencies required at root, at frontend and at backend.

Inside frontend folder:

- `npm start`: Starts frontend in development mode
- `npm run build`: Builds the frontend for production to the build folder
- `npm test`: Launches the test runner in the interactive watch mode
- `npm run eject`: This will remove the single build dependency from the frontend.

Inside backend folder:

- `npm run dev`: Starts backend using nodemon.
<<<<<<< HEAD
<<<<<<< HEAD
- `npm start`: Starts backend without nodemon.
=======
- `npm start`: Starts backend without nodemon.
>>>>>>> a0196cc4814d3f45a559770ac140757c3f569c25
