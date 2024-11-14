Company Employee Management System
This is a full-stack web application built using React (Vite), Express, and MongoDB to manage employee details. It includes features for adding, updating, and deleting employee information.

Features
Employee List: View all employees with their details.
Add Employee: Add new employees to the system.
Update Employee: Edit existing employee details.
Delete Employee: Remove an employee from the system.
Responsive UI: The application is designed to be responsive, adapting to various screen sizes.
Technologies Used
Frontend: React (Vite)
Backend: Express.js
Database: MongoDB (via Mongoose)
Styling: Tailwind CSS
Modals: React Modal
Notifications: React Hot Toast
Project Setup
Backend
Clone the backend repository:

bash
Copy code
git clone https://github.com/rishi-raj0104/Company.git
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the backend folder with the following:

env
Copy code
MONGO_URI=your_mongo_connection_url
PORT=your_preferred_port
Start the server:

bash
Copy code
npm run dev
Frontend
Navigate to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the Vite development server:

bash
Copy code
npm run dev
Run Both Servers
To run both backend and frontend servers, you can run them in separate terminals or use a tool like concurrently.
API Endpoints
GET /api/employees: Fetch all employee records.
POST /api/employees: Add a new employee.
PUT /api/employees/
: Update an existing employee's details.
DELETE /api/employees/
: Delete an employee.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -am 'Add feature').
Push to the branch (git push origin feature-name).
Create a new Pull Request.
