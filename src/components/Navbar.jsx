import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      backgroundColor: '#343a40', 
      padding: '15px 30px',
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{ margin: 0 }}> QuizPlatform</h2>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/student" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Espace Étudiant</Link>
        <Link to="/teacher" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Espace Enseignant</Link>
        <Link to="/admin" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Dashboard Admin</Link>
        <Link to="/" style={{ color: '#ffc107', textDecoration: 'none', fontWeight: 'bold', marginLeft: '20px' }}>Déconnexion</Link>
      </div>
    </nav>
  );
}

export default Navbar;