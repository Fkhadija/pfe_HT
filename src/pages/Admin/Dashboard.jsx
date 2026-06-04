import React from 'react';

function Dashboard() {
  const statsGlobale = {
    totalStudents: 150,
    totalExams: 24,
    averageScore: "14.5 / 20"
  };

  const usersList = [
    { id: 1, name: "Ahmed", role: "Étudiant", status: "Actif" },
    { id: 2, name: "Sara", role: "Enseignant", status: "Actif" },
    { id: 3, name: "Karim", role: "Étudiant", status: "Bloqué" },
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 className="title-elegant">Vue d'ensemble de la plateforme</h2>

      <div className="bento-container">
        <div className="bento-card">
          <h3 style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '500' }}>Étudiants Inscrits</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-color)' }}>{statsGlobale.totalStudents}</p>
        </div>
        
        <div className="bento-card">
          <h3 style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '500' }}>Examens Créés</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--success-color)' }}>{statsGlobale.totalExams}</p>
        </div>
        
        <div className="bento-card">
          <h3 style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '500' }}>Moyenne Globale</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>{statsGlobale.averageScore}</p>
        </div>
      </div>

      <div className="bento-card" style={{ marginTop: '24px' }}>
        <h3 style={{ marginBottom: '20px', color: 'var(--primary-color)', fontSize: '1.25rem' }}>Gestion des utilisateurs</h3>
        <table className="elegant-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Rôle</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map(user => (
              <tr key={user.id}>
                <td style={{ fontWeight: '500', color: 'var(--primary-color)' }}>{user.name}</td>
                <td style={{ color: 'var(--text-muted)' }}>{user.role}</td>
                <td>
                  <span className={user.status === 'Actif' ? 'badge-success' : 'badge-danger'}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textDecoration: 'underline' }}>
                    Éditer le profil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;