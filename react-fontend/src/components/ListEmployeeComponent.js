import React, { useEffect, useState } from 'react';
import EmployeeSevice from '../sevices/EmployeeSevice';

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
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Fist Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                    </tr>
                </thead>

                <tbody>
                    {employee.map((employee) => (
                        <tr key={employee.id}>
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
