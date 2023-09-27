import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
    return (
        <Router>
            <div className="container">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ListEmployeeComponent />} />
                        <Route path="/employees" element={<ListEmployeeComponent />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
