import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AuthRoute from './components/AuthRoute';
import Navbar from './components/Navbar';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<AuthRoute element={Dashboard} path={''} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
