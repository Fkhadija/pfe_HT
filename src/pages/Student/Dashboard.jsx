import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Dashboard.css';

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">
      
      <aside className="dashboard-sidebar">
        
        <div className="sidebar-profile">
          <div className="profile-avatar">KF</div>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>Khadija Fouganni</h3>
            <p style={{ margin: 0, fontSize: '12px', opacity: 0.7 }}>Ingénierie Informatique</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <p style={{ fontSize: '11px', textTransform: 'uppercase', opacity: 0.5, fontWeight: 'bold', margin: '0 0 10px 10px' }}>Espace Académique</p>
          
          <Link to="/student" className="nav-item active">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            Examens Disponibles
          </Link>
          <Link to="/student/history" className="nav-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Historique
          </Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        
        <h1 style={{ marginBottom: '30px', fontSize: '28px' }}>Bienvenue sur votre espace</h1>

        <div className="stats-grid">
          <div className="stat-box">
            <h3>Examens Passés</h3>
            <p className="stat-number">2</p>
          </div>
          <div className="stat-box">
            <h3>Moyenne Générale</h3>
            <p className="stat-number" style={{ color: '#2563eb' }}>15.5 <span style={{ fontSize: '18px', opacity: 0.5 }}>/ 20</span></p>
          </div>
          <div className="stat-box">
            <h3>Taux de Réussite</h3>
            <p className="stat-number" style={{ color: '#10b981' }}>100%</p>
          </div>
        </div>

        <div className="dashboard-grid">
          
          <div>
            <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Examens à passer</h2>
            
            <div className="content-card">
              <div className="exam-tags">
                <span className="exam-tag">30 Minutes</span>
                <span className="exam-tag">10 Questions</span>
              </div>
              <h3 style={{ marginBottom: '10px' }}>QCM React.js Avancé</h3>
              <p style={{ opacity: 0.8, fontSize: '14px', marginBottom: '20px', lineHeight: '1.5' }}>
                Testez vos connaissances sur la gestion d'état complexe, le routage et le cycle de vie des composants fonctionnels.
              </p>
              <button className="auth-button" onClick={() => navigate('/student/exam/1')}>
                Commencer l'examen
              </button>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Derniers Résultats</h2>
            
            <div className="content-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: '0 0 5px 0' }}>Architecture Réseau</h4>
                <p style={{ margin: 0, fontSize: '12px', opacity: 0.6 }}>Passé le 10 Juin</p>
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '8px 12px', borderRadius: '8px', fontWeight: 'bold' }}>
                18/20
              </div>
            </div>

            <div className="content-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: '0 0 5px 0' }}>Développement PHP</h4>
                <p style={{ margin: 0, fontSize: '12px', opacity: 0.6 }}>Passé le 05 Juin</p>
              </div>
              <div style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', padding: '8px 12px', borderRadius: '8px', fontWeight: 'bold' }}>
                12/20
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}