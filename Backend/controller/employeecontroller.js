const Employee = require('../models/Employeemodel');

const getEmployees = async (req, res) => {
    try {
        const allEmployee = await Employee.find();
        console.log('getEmployees');
        if (!allEmployee || allEmployee.length === 0) {
            return res.status(404).json({ 
                success: true,
                statuscode: "01",
                message: "There is no Employee"
            });
        }
        return res.status(200).json({ 
            success: true,
            statuscode: "00",
            Employee: allEmployee
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ 
            success: false,
            message: 'Server error',
            statuscode: "02", 
        });
    }
};

const createEmployee = async (req, res) => {
    try {
        const { name, age, gender, department } = req.body;
        const newEmployee = new Employee({ name, age, gender, department });
        await newEmployee.save();
        res.status(200).json({
            success: true,
            statuscode: "00",
            Employee: newEmployee
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ 
            success: false,
            message: 'Server error',
            statuscode: "02", 
        });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, gender, department } = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(id, { name, age, gender, department }, { new: true });
        
        if (!updatedEmployee) {
            return res.status(404).json({
                success: true,
                statuscode: "01",
                message: "Cannot find employee"
            });
        }
        
        res.status(200).json({
            success: true,
            statuscode: "00",
            Employee: updatedEmployee
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ 
            success: false,
            message: 'Server error',
            statuscode: "02", 
        });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        
        if (!deletedEmployee) {
            return res.status(404).json({
                success: true,
                statuscode: "01",
                message: "Cannot find employee"
            });
        }
        
        res.status(200).json({
            success: true,
            statuscode: "00",
            message: "Employee deleted successfully",
            Employee: deletedEmployee
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Server error',
            statuscode: "02",
        });
    }
};

module.exports = { getEmployees, createEmployee, updateEmployee, deleteEmployee };
