import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Vos imports existants
import Login from './pages/Auth/Login'; 
import Register from './pages/Register'; 
import LandingPage from './pages/LandingPage'; 
import AvailableExams from './pages/Student/AvailableExams';
import TakeExam from './pages/Student/TakeExam';
import StudentResult from './pages/Student/StudentResult';
import AddQuestions from './pages/Teacher/AddQuestions';
import AdminDashboard from './pages/Admin/Dashboard';
import StudentDashboard from './pages/Student/Dashboard';
import StudentHistory from './pages/Student/History';
import DetailedResult from './pages/Student/DetailedResult';

// Dans src/App.jsx

function SmartNavbar({ theme, toggleTheme }) {
  const location = useLocation();
  const isPublicPage = ['/', '/login', '/register'].includes(location.pathname);

  return (
    <div style={{ 
      background: '#0f172a', 
      padding: '15px 30px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      borderBottom: theme === 'dark' ? '1px solid #1e293b' : 'none',
      zIndex: 1000,
      position: 'relative'
    }}>
      
      {/* 1. LE LIEN HOME SUR LE LOGO */}
      <Link to="/" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>
        QuizPlatform
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        
        {/* BOUTON THÈME (Toujours visible) */}
        <button 
          onClick={toggleTheme} 
          style={{ 
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', 
            borderRadius: '50%', padding: '8px 12px', fontSize: '18px', cursor: 'pointer',
            color: 'white', transition: 'all 0.3s' 
          }}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        {/* 2. LE BOUTON DÉCONNEXION (Caché uniquement sur les pages publiques) */}
        {!isPublicPage && (
          <Link to="/login" style={{ color: '#f59e0b', fontWeight: 'bold', textDecoration: 'none' }}>
            Déconnexion
          </Link>
        )}
      </div>
    </div>
  );
}

// 2. L'APPLICATION PRINCIPALE QUI GÈRE LA MÉMOIRE DU THÈME
function App() {
  // On lit le thème sauvegardé, sinon on met "light" par défaut
  const [theme, setTheme] = useState(localStorage.getItem('quiz_theme') || 'light');

  // À chaque fois que 'theme' change, on met à jour le body et la sauvegarde
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('quiz_theme', theme);
  }, [theme]);

  // Fonction pour inverser le thème
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
        {/* On passe le thème actuel et la fonction au bouton de la Navbar */}
        <SmartNavbar theme={theme} toggleTheme={toggleTheme} /> 

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/teacher/create/questions" element={<AddQuestions />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/history" element={<StudentHistory />} /> 
          <Route path="/student/result/:id" element={<DetailedResult />} />
          <Route path="/student/exam/:id" element={<TakeExam />} />
          <Route path="/student/result" element={<StudentResult />} />
        </Routes>
    </Router>
  );
}

export default App;