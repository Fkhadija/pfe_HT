import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar'; 
import Login from './pages/Auth/Login';
import AvailableExams from './pages/Student/AvailableExams';
import TakeExam from './pages/Student/TakeExam';
import CreateExam from './pages/Teacher/CreateExam';
import AddQuestions from './pages/Teacher/AddQuestions';
import AdminDashboard from './pages/Admin/Dashboard';


const TeacherHome = () => (
  <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
    <h2 style={{ color: 'green' }}>Espace Enseignant</h2>
    <Link to="/teacher/create" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
      + Créer un nouvel examen
    </Link>
  </div>
);

function App() {
  return (
    <Router>
      
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/student" element={<AvailableExams />} />
        <Route path="/student/exam/:id" element={<TakeExam />} />
        
        <Route path="/teacher" element={<TeacherHome />} />
        <Route path="/teacher/create" element={<CreateExam />} />
        <Route path="/teacher/create/questions" element={<AddQuestions />} />
        
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;