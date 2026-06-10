import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Imports Auth & Public
import Login from './pages/Auth/Login'; 
import Register from './pages/Register'; 
import LandingPage from './pages/LandingPage'; 

// Imports Student
import AvailableExams from './pages/Student/AvailableExams';
import TakeExam from './pages/Student/TakeExam';
import StudentResult from './pages/Student/StudentResult';
import StudentDashboard from './pages/Student/Dashboard';
import StudentHistory from './pages/Student/History';
import DetailedResult from './pages/Student/DetailedResult';

// Imports Teacher & Admin
import TeacherDashboard from './pages/Teacher/Dashboard'; // <-- NOUVEL IMPORT ICI
import AddQuestions from './pages/Teacher/AddQuestions';
import AdminDashboard from './pages/Admin/Dashboard';
import CreateExam from './pages/Teacher/CreateExam';


// 1. LA NAVBAR INTELLIGENTE (Top Bar)
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
      
      {/* LE LIEN HOME SUR LE LOGO */}
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

        {/* LE BOUTON DÉCONNEXION (Caché sur les pages publiques) */}
        {!isPublicPage && (
          <Link to="/login" style={{ color: '#f59e0b', fontWeight: 'bold', textDecoration: 'none' }}>
            Déconnexion
          </Link>
        )}
      </div>
    </div>
  );
}

// 2. L'APPLICATION PRINCIPALE
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('quiz_theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('quiz_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
        <SmartNavbar theme={theme} toggleTheme={toggleTheme} /> 

        <Routes>
          {/* Pages Publiques */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
          
          {/* Routes Étudiant */}
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/history" element={<StudentHistory />} /> 
          <Route path="/student/result/:id" element={<DetailedResult />} />
          <Route path="/student/exam/:id" element={<TakeExam />} />
          <Route path="/student/result" element={<StudentResult />} />
          
          {/* Routes Enseignant */}
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/teacher/create/questions" element={<AddQuestions />} />
          <Route path="/teacher/create" element={<CreateExam />} /> 
          
          
          {/* Route Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
    </Router>
  );
}

export default App;