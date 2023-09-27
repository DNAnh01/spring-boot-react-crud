import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService {
    getAllEmployee() {
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService();
