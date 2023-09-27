import React, { useState } from 'react';

const ListEmployeeComponent = () => {
    const [employee, setEmployee] = useState([]);

    return (
        <div className="container">
            <h2 className="text-center">List Employees</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Employee Id</th>
                    <th>Employee Fist Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                </thead>

                <tbody>
                    {employee.map((employee) => (
                        <tr key={employee?.id}>
                            <td>{employee?.firstName}</td>
                            <td>{employee?.lastName}</td>
                            <td>{employee?.emailId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;
