export const API_URLS = {
    DELETEEMP: (id) => `http://localhost:5000/api/employees/${id}`,
    UPDATEEMP: (employeeToUpdate) => `http://localhost:5000/api/employees/${employeeToUpdate._id}`,
    EMPLOYEE: 'http://localhost:5000/api/employees',
};
  