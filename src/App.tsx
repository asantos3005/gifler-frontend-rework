import './styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DefaultLayout, CenteredLayout } from './components/Layouts';

import Home from './pages/Home';
import Login from './pages/Login';
import Create from './pages/Create';
import Register from './pages/Register';
import Collection from './pages/Collection';

function App() {
  return (
    <Router>
      <Navbar /> {/* Always shows */}
      <Routes>
        <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
        <Route path="/create" element={<CenteredLayout>< Create/></CenteredLayout>} />                 
        <Route path="/login" element={<CenteredLayout>< Login/></CenteredLayout>} /> 
        <Route path="/register" element={<CenteredLayout>< Register/></CenteredLayout>} /> 
        <Route path="/collection" element={<CenteredLayout>< Collection/></CenteredLayout>} /> 

      </Routes>
    </Router>
  );
}

export default App;
