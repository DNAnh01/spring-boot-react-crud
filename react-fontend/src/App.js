import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
    return (
        <Router>
            <div className="container">
                <div>
                    <HeaderComponent />
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
