import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Student/Dashboard.css'; 

export default function TeacherDashboard() {
  const navigate = useNavigate();

  const [myExams] = useState([
    { id: 1, title: "QCM React.js Avancé", date: "10 Juin 2026", duration: "30 min", participants: 45, passRate: "82%", status: "Actif" },
    { id: 2, title: "Bases de données SQL", date: "05 Juin 2026", duration: "45 min", participants: 120, passRate: "65%", status: "Terminé" },
    { id: 3, title: "Architecture Réseau", date: "Prévu le 20 Juin", duration: "60 min", participants: 0, passRate: "-", status: "Brouillon" }
  ]);

  return (
    <div className="dashboard-layout">
      
      <aside className="dashboard-sidebar">
        <div className="sidebar-profile">
          <div className="profile-avatar" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
            PR
          </div>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>Dr. Youssef Alaoui</h3>
            <p style={{ margin: 0, fontSize: '12px', opacity: 0.7 }}>Professeur - Informatique</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <p style={{ fontSize: '11px', textTransform: 'uppercase', opacity: 0.5, fontWeight: 'bold', margin: '0 0 10px 10px' }}>Gestion</p>
          
          <Link to="/teacher" className="nav-item active">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            Tableau de bord
          </Link>
          <Link to="/teacher/create" className="nav-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            Créer un examen
          </Link>
          <Link to="/teacher/results" className="nav-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Résultats étudiants
          </Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ margin: '0 0 10px 0', fontSize: '28px' }}>Espace Enseignant</h1>
            <p style={{ margin: 0, color: '#64748b' }}>Gérez vos cours, vos examens et suivez les performances de vos étudiants.</p>
          </div>
          
          <button 
            className="auth-button" 
            style={{ width: 'auto', padding: '12px 24px' }}
            onClick={() => navigate('/teacher/create')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
              <path d="M12 5v14M5 12h14"></path>
            </svg>
            Nouvel Examen
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <h3>Examens Créés</h3>
            <p className="stat-number">12</p>
          </div>
          <div className="stat-box">
            <h3>Total Étudiants Évalués</h3>
            <p className="stat-number" style={{ color: '#2563eb' }}>340</p>
          </div>
          <div className="stat-box">
            <h3>Taux de Réussite Moyen</h3>
            <p className="stat-number" style={{ color: '#10b981' }}>74%</p>
          </div>
        </div>

        <div className="content-card" style={{ padding: 0, overflowX: 'auto', marginTop: '30px' }}>
          <div style={{ padding: '20px', borderBottom: '1px solid var(--border-color, #e2e8f0)' }}>
            <h2 style={{ fontSize: '18px', margin: 0 }}>Mes Examens Récents</h2>
          </div>
          
          <table className="history-table">
            <thead>
              <tr>
                <th>Titre de l'examen</th>
                <th>Date / Disponibilité</th>
                <th>Durée</th>
                <th>Participants</th>
                <th>Taux de réussite</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myExams.map(exam => (
                <tr key={exam.id}>
                  <td style={{ fontWeight: 'bold' }}>{exam.title}</td>
                  <td style={{ fontSize: '13px', color: '#64748b' }}>{exam.date}</td>
                  <td style={{ fontSize: '13px' }}>{exam.duration}</td>
                  <td style={{ fontWeight: 'bold' }}>{exam.participants}</td>
                  <td style={{ fontWeight: 'bold', color: exam.passRate !== '-' ? '#10b981' : 'inherit' }}>
                    {exam.passRate}
                  </td>
                  <td>
                    <span style={{ 
                      display: 'inline-flex', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold',
                      background: exam.status === 'Actif' ? 'rgba(16, 185, 129, 0.1)' : exam.status === 'Terminé' ? 'rgba(100, 116, 139, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                      color: exam.status === 'Actif' ? '#10b981' : exam.status === 'Terminé' ? '#64748b' : '#f59e0b'
                    }}>
                      {exam.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      Gérer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}