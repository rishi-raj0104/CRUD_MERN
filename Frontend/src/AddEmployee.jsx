import React, { useState } from 'react';
import { apiConnector } from './operations/apiconnecter';
import { toast } from 'react-hot-toast';
import { API_URLS } from './operations/apiurl';
const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    gender: '',
    age: '',
    department: ''
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiConnector('POST',  API_URLS.EMPLOYEE, employee);
      //const response = await axios.post(`http://localhost:5000/api/employees/`, employee);
      //console.log('Employee added:', response.data);
      toast.success('Employees added successfully!');
      setEmployee({
        name: '',
        gender: '',
        age: '',
        department: ''
      });
    } catch (err) {
      setError(err.message);
      toast.error('Failed to add employees.');
    }
  };
  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold text-center mb-6">Add Employee</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={employee.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={employee.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={employee.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={employee.department}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
