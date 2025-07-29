import './styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
//import Upload from './pages/Upload';

function App() {
  return (
    <Router>
      <Navbar /> {/* Always shows */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/upload" element={<Upload />} /> */}
       
      </Routes>
    </Router>
  );
}

export default App;
