import './styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Create from './pages/Create';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Navbar /> {/* Always shows */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={< Create/>} />                 
        <Route path="/login" element={< Login/>} /> 
        <Route path="/register" element={< Register/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
