import React, { useEffect, useState } from 'react';
import { apiConnector } from './operations/apiconnecter';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { API_URLS } from './operations/apiurl';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
//Modal.setAppElement('#root');
const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [employeeToUpdate, setEmployeeToUpdate] = useState({ name: '', gender: '', age: '', department: '', _id: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await apiConnector('GET', API_URLS.EMPLOYEE);
        setEmployees(response.data.Employee);
        toast.success('Employees loaded successfully!');
      } catch (err) {
        setError(err.message);
        //toast.error('Failed to load employees.');
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      
      await apiConnector('DELETE', API_URLS.DELETEEMP(id));
      setEmployees(employees.filter(employee => employee._id !== id));
      setIsDeleteModalOpen(false);
      toast.success('Employee deleted successfully!');
    } catch (err) {
      setError(err.message);
      toast.error('Failed to delete employee.');
    }
  };

  const handleUpdate = async () => {
    try {
      await apiConnector('PUT', API_URLS.UPDATEEMP(employeeToUpdate),employeeToUpdate);
      setEmployees(employees.map(emp => (emp._id === employeeToUpdate._id ? employeeToUpdate : emp)));
      setIsUpdateModalOpen(false);
      toast.success('Employee updated successfully!');
    } catch (err) {
      setError(err.message);
      toast.error('Failed to update employee.');
    }
  };

  const openUpdateModal = (employee) => {
    setEmployeeToUpdate(employee);
    setIsUpdateModalOpen(true);
  };

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  // if (error) {
  //   return <div className="text-center text-red-600">Error: {error}</div>;
  // }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Employee Details</h1>
      <button
        onClick={() => navigate('/addemployee')}
        className="mb-4 ml-72 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Employee
      </button>
      <div className='flex justify-center'>
      <table className="table-auto w-7/12 border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-1">Name</th>
            <th className="border border-gray-300 p-1">Gender</th>
            <th className="border border-gray-300 p-1">Age</th>
            <th className="border border-gray-300 p-1">Department</th>
            <th className="border border-gray-300 p-1">Actions</th>
          </tr>
        </thead>
        <tbody>
        {employees.length === 0 ? (
          <tr>
            <td colSpan="5" className="text-center p-4">No records found</td>
          </tr>
          ) : (
          employees.map((employee) => (
            <tr key={employee._id}>
              <td className="border border-gray-300 p-1">{employee.name}</td>
              <td className="border border-gray-300 p-1">{employee.gender}</td>
              <td className="border border-gray-300 p-1">{employee.age}</td>
              <td className="border border-gray-300 p-1">{employee.department}</td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => openUpdateModal(employee)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    setEmployeeToDelete(employee._id);
                    setIsDeleteModalOpen(true);
                  }}
                  className="px-2 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )
      }
          
        </tbody>
      </table>
      </div>
      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setIsDeleteModalOpen(false)}
        style={customStyles}
        contentLabel="Confirm Deletion"
      >
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this employee?</p>
        <button onClick={() => handleDelete(employeeToDelete)} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">
          Delete
        </button>
        <button onClick={() => setIsDeleteModalOpen(false)} className="mt-4 px-4 py-2 bg-gray-300 rounded">
          Cancel
        </button>
      </Modal>
      {/* Update Employee Modal */}
      <Modal
        isOpen={isUpdateModalOpen}
        onRequestClose={() => setIsUpdateModalOpen(false)}
        style={customStyles}
        contentLabel="Update Employee"
      >
        <h2>Update Employee</h2>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          value={employeeToUpdate.name}
          onChange={(e) => setEmployeeToUpdate({ ...employeeToUpdate, name: e.target.value })}
          className="border p-2 w-full mb-2"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gender</label>
        <select
          value={employeeToUpdate.gender}
          onChange={(e) => setEmployeeToUpdate({ ...employeeToUpdate, gender: e.target.value })}
          className="border p-2 w-full mb-2"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">Age</label>
        <input
          type="text"
          placeholder="Age"
          value={employeeToUpdate.age}
          onChange={(e) => setEmployeeToUpdate({ ...employeeToUpdate, age: e.target.value })}
          className="border p-2 w-full mb-2"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">Department</label>
        <input
          type="text"
          placeholder="Department"
          value={employeeToUpdate.department}
          onChange={(e) => setEmployeeToUpdate({ ...employeeToUpdate, department: e.target.value })}
          className="border p-2 w-full mb-2"
        />
        <button onClick={handleUpdate} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          Update
        </button>
        <button onClick={() => setIsUpdateModalOpen(false)} className="mt-4 px-4 py-2 bg-gray-300 rounded">
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default Home;
