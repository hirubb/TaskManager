# TaskManager


<h1>Task Manager System<h1></h1>
A simple Task Manager system built with Laravel for the backend and Vue.js for the frontend. 
This project allows users to register, log in, and manage their own tasks with CRUD functionality.

Features
User Authentication
User registration and login using Laravel’s built-in authentication.
Task Management
Users can create, edit, delete, and mark their tasks as completed or pending.
Each task includes the following fields:
Task Title
Task Description (optional)
Task Status (pending or completed)
Tasks are displayed based on the authenticated user, ensuring that users can only view and manage their own tasks.
API Endpoints
Endpoints are available for:
Creating, updating, deleting, and listing tasks.
Filtering tasks by status (all, pending, completed).
Restricting access to tasks so that each user can only access their own tasks.
Laravel Technologies Used
Migrations: Database schema management.
Seeders: Database seeding for test data.
Validation: Form request validation.
Pagination: Paginate task listings.
Repository Pattern: For better code organization and separation of concerns.
