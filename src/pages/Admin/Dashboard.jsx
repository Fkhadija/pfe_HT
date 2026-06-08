import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  // Simulation de données pour correspondre à votre capture d'écran
  const [stats, setStats] = useState({
    students: 150,
    exams: 24,
    average: "14.5 / 20"
  });

  const [users, setUsers] = useState([
    { id: 1, nom: "Ahmed", role: "Étudiant", statut: "Actif" },
    { id: 2, nom: "Sara", role: "Enseignant", statut: "Actif" }
  ]);

  return (
    <div className="page-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Vue d'ensemble de la plateforme</h1>
      </div>

      {/* C'est cette classe 'stats-grid' qui va placer les éléments côte à côte */}
      <div className="stats-grid">
        <div className="stat-box">
          <h3>Étudiants Inscrits</h3>
          <p className="stat-number">{stats.students}</p>
        </div>
        
        <div className="stat-box">
          <h3>Examens Créés</h3>
          <p className="stat-number">{stats.exams}</p>
        </div>
        
        <div className="stat-box">
          <h3>Moyenne Globale</h3>
          <p className="stat-number">{stats.average}</p>
        </div>
      </div>

      <div style={{ marginTop: '40px', marginBottom: '20px' }}>
        <h2 className="dashboard-title" style={{ fontSize: '20px', color: 'var(--primary-color)' }}>
          Gestion des utilisateurs
        </h2>
      </div>

      {/* La classe 'admin-table' va styliser proprement le tableau */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Rôle</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.nom}</td>
              <td>{user.role}</td>
              <td>
                <span className="quiz-badge" style={{ backgroundColor: user.statut === 'Actif' ? '#dcfce7' : '#fee2e2', color: user.statut === 'Actif' ? '#166534' : '#991b1b' }}>
                  {user.statut}
                </span>
              </td>
              <td>
                <button className="btn-outline" style={{ fontSize: '12px', padding: '4px 8px' }}>Éditer le profil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

