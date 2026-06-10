import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

export default function StudentHistory() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All'); // All, Passed, Failed

  // Données simulées
  const allAttempts = [
    { id: 1, name: "PHP", raw: "4 / 5", percentage: "80%", status: "Passed", date: "25 May 2026 at 12:10" },
    { id: 2, name: "HTML", raw: "2 / 3", percentage: "67%", status: "Passed", date: "22 May 2026 at 15:35" },
    { id: 3, name: "C++", raw: "1 / 5", percentage: "20%", status: "Failed", date: "10 May 2026 at 09:00" },
  ];

  // Logique de filtrage
  const filteredAttempts = allAttempts.filter(attempt => {
    const matchesSearch = attempt.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'All' || attempt.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="dashboard-layout">
      {/* --- SIDEBAR --- */}
      <aside className="dashboard-sidebar">
        {/* Le logo en double a été supprimé ici */}
        
        <div className="sidebar-profile">
          <div className="profile-avatar">KF</div>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>Khadija Fouganni</h3>
            <p style={{ margin: 0, fontSize: '12px', opacity: 0.7 }}>Étudiante</p>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <Link to="/student" className="nav-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            Examens Disponibles
          </Link>
          <Link to="/student/history" className="nav-item active">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Mon Historique
          </Link>
        </nav>
      </aside>

      {/* --- CONTENU PRINCIPAL --- */}
      <main className="dashboard-main">
        <h1 style={{ marginBottom: '10px', fontSize: '24px' }}>Mon Historique d'Examens</h1>
        <p style={{ color: '#64748b', marginBottom: '30px' }}>Consultez vos scores et les détails de vos passages passés.</p>

        {/* Barre de recherche et filtres */}
        <div className="history-controls">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Rechercher un examen..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="filter-group">
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#94a3b8' }}>FILTRE:</span>
            <button className={`filter-btn ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter('All')}>Tous</button>
            <button className={`filter-btn ${filter === 'Passed' ? 'active' : ''}`} onClick={() => setFilter('Passed')}>Réussis</button>
            <button className={`filter-btn ${filter === 'Failed' ? 'active' : ''}`} onClick={() => setFilter('Failed')}>Échoués</button>
          </div>
        </div>

        {/* Tableau des résultats */}
        <div className="content-card" style={{ padding: 0, overflowX: 'auto' }}>
          {filteredAttempts.length > 0 ? (
            <table className="history-table">
              <thead>
                <tr>
                  <th>Nom de l'examen</th>
                  <th>Score</th>
                  <th>Pourcentage</th>
                  <th>Statut</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredAttempts.map(attempt => (
                  <tr key={attempt.id}>
                    <td style={{ fontWeight: 'bold' }}>{attempt.name}</td>
                    <td>{attempt.raw}</td>
                    <td style={{ fontWeight: 'bold' }}>{attempt.percentage}</td>
                    <td>
                      <span style={{ 
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold',
                        background: attempt.status === 'Passed' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                        color: attempt.status === 'Passed' ? '#10b981' : '#ef4444'
                      }}>
                        {attempt.status === 'Passed' ? (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Réussi
                          </>
                        ) : (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            Échoué
                          </>
                        )}
                      </span>
                    </td>
                    <td style={{ fontSize: '13px', color: '#64748b' }}>{attempt.date}</td>
                    <td>
                      <button 
                        className="btn-outline" 
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', fontSize: '12px', fontWeight: 'bold' }}
                        onClick={() => navigate(`/student/result/${attempt.id}`)}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        Voir Résultat
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div style={{ padding: '60px 20px', textAlign: 'center', color: '#64748b' }}>
              <p style={{ fontSize: '18px', marginBottom: '10px' }}>Aucun résultat trouvé.</p>
              <p style={{ fontSize: '14px' }}>Essayez de modifier vos filtres ou votre recherche.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}