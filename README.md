# Company Employee Management System

This is a full-stack Employee Management System built with React, Express.js, MongoDB, and Vite. It allows you to manage employee records, including adding, updating, and deleting employee details.

## Features

- **View Employees**: Display a list of employees with details like Name, Gender, Age, and Department.
- **Add Employee**: Add new employee details to the system.
- **Update Employee**: Edit existing employee details.
- **Delete Employee**: Remove an employee from the system.
- **Responsive Design**: The application adapts to various screen sizes using Tailwind CSS.
- **Toast Notifications**: Provides success and error messages using React Hot Toast.

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Express.js
- **Database**: MongoDB (with Mongoose)
- **Styling**: Tailwind CSS
- **Notifications**: React Hot Toast
- **Modals**: React Modal

## Installation

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/rishi-raj0104/Company.git
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up the `.env` file with MongoDB URI and desired port:

    ```env
    MONGO_URI=your_mongo_connection_url
    PORT=your_preferred_port
    ```

4. Run the server:

    ```bash
    npm run dev
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

### Running Both Servers

To run both the frontend and backend servers, you can use separate terminals or a tool like `concurrently` to run both in one terminal.

```bash
concurrently "npm run dev" "npm run dev"

API Endpoints
GET /api/employees: Fetch a list of all employees.
POST /api/employees: Add a new employee.
PUT /api/employees/
: Update the details of an existing employee.
DELETE /api/employees/
: Delete an employee by their ID.

Usage
Add Employee: Click the "Add Employee" button to add a new employee's details.
Update Employee: Click the "Update" button next to an employee to modify their details.
Delete Employee: Click the "Delete" button to remove an employee from the system.
