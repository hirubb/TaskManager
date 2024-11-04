# TaskManager


<h1>Task Manager System<h1></h1><br>
<p>A simple Task Manager system built with Laravel for the backend and Vue.js for the frontend. 
This project allows users to register, log in, and manage their own tasks with CRUD functionality.
</p>
<br>
  
<h2>Features</h2>
<ul>
  <li>User Authentication</li>
  <li>User registration and login using Laravel’s built-in authentication.</li>
  <li>Task Management
      <li>Users can create, edit, delete, and mark their tasks as completed or pending.
      Each task includes the following fields:
      <li>Task Title</li>
      <li>Task Description (optional)</li>
      <li>Task Status (pending or completed)</li>
  <li>Tasks are displayed based on the authenticated user, ensuring that users can only view and manage their own tasks.</li>
  </li>
  <li>API Endpoints
    <li>Endpoints are available for:
      <li>Creating, updating, deleting, and listing tasks.</li>
      <li>Filtering tasks by status (all, pending, completed).</li>
      <li>Restricting access to tasks so that each user can only access their own tasks.</li>
    </li>
  
  </li>
</ul>
<h2>Laravel Technologies Used</h2>
<ul>
  <li>Migrations: Database schema management.</li>
  <li>Seeders: Database seeding for test data.</li>
  <li>Validation: Form request validation.</li>
  <li>Pagination: Paginate task listings.</li>
  <li>Repository Pattern: For better code organization and separation of concerns.</li>
</ul>




















