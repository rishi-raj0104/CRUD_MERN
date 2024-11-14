Company Employee Management System
This project is a simple web application for managing employee details such as their name, gender, age, and department. The application allows administrators to perform CRUD (Create, Read, Update, Delete) operations on employee data.

Features
View Employee Details: Lists all employee records with an option to view and update individual employee details.
Add New Employee: Allows the admin to add a new employee to the database.
Update Employee Information: Enables the admin to update employee details such as name, gender, age, and department.
Delete Employee: Provides the option to delete an employee's record.
Toast Notifications: Displays success and error messages for various operations.
Responsive Design: Works on desktop and mobile devices.
Technologies Used
Frontend: React.js, Tailwind CSS, React Modal
Backend: Express.js
Database: MongoDB (using Mongoose for MongoDB object modeling)
API Requests: Axios
Authentication: Not implemented (for future updates)
State Management: React State Hook
Notifications: React Hot Toast
Installation
Clone the repository

bash
Copy code
git clone https://github.com/rishi-raj0104/Company.git
Install dependencies

For the backend:
bash
Copy code
cd backend
npm install
For the frontend:
bash
Copy code
cd frontend
npm install
Environment Variables Create a .env file in the backend folder and add the following:

bash
Copy code
PORT=5000
MONGO_URI=your-mongo-db-uri
Run the project

Start the backend server:
bash
Copy code
cd backend
npm start
Start the frontend server:
bash
Copy code
cd frontend
npm run dev
Access the application

The frontend will be available at http://localhost:3000
The backend API will be available at http://localhost:5000
Endpoints
GET /employees: Fetch all employees
POST /employees: Add a new employee
PUT /employees/:id: Update an existing employee's details
DELETE /employees/:id: Delete an employee by ID
