import React, { useEffect, useState } from 'react';
import EmployeeSevice from '../sevices/EmployeeSevice';
import { Link } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        EmployeeSevice.getAllEmployee()
            .then((res) => {
                setEmployee(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container">
            <h2 className="text-center">List Employees</h2>
            <Link to="/add-employee" className="btn btn-primary mb-2">
                Add Employee
            </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fist Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                    </tr>
                </thead>

                <tbody>
                    {employee.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;
