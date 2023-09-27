import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
    return (
        <Router>
            <div className="container">
                <div>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<ListEmployeeComponent />} />
                        <Route path="/employees" element={<ListEmployeeComponent />} />
                        <Route path="/add-employee" element={<AddEmployeeComponent />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
