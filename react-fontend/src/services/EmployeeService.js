import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService {
    getAllEmployee() {
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/employees');
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_BASE_REST_API_URL + '/employees', employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService();
