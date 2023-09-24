import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
    return (
        <div className="container">
            <HeaderComponent />
            <div>
                <ListEmployeeComponent />
            </div>
            <FooterComponent />
        </div>
    );
}

export default App;
