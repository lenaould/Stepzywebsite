import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Programs from '../pages/Programs';
import Join from '../pages/Join';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ClientDashboard from '../pages/ClientDashboard';
import AdminDashboard from '../pages/AdminDashboard';

function Protected({ children, role }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/dashboard" />;
  return children;
}

export default function AppRoutes() {
  return <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Protected><ClientDashboard /></Protected>} />
      <Route path="/admin" element={<Protected role="admin"><AdminDashboard /></Protected>} />
    </Route>
  </Routes>;
}
