import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Dashboard.css';

export default function DetailedResult() {
  const navigate = useNavigate();
  const { id } = useParams(); // Permet de récupérer l'ID de l'examen dans l'URL

  // Simulation d'un examen réussi (En vrai, on chercherait l'examen selon l'ID)
  const isPassed = true; 

  return (
    <div className="dashboard-layout">
      {/* SIDEBAR */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header"><h2 style={{ fontSize: '22px', margin: 0, color: '#2563eb' }}>QuizPlatform</h2></div>
        <div className="sidebar-profile">
          <div className="profile-avatar">KF</div>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>Khadija Fouganni</h3>
            <p style={{ margin: 0, fontSize: '12px', opacity: 0.7 }}>Étudiante</p>
          </div>
        </div>
        <nav className="sidebar-nav">
          <Link to="/student" className="nav-item">📚 Examens Disponibles</Link>
          <Link to="/student/history" className="nav-item active">⏱ Mon Historique</Link>
        </nav>
      </aside>

      {/* CONTENU PRINCIPAL */}
      <main className="dashboard-main">
        <button 
          onClick={() => navigate('/student/history')} 
          style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', marginBottom: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}
        >
          ← Retour à l'historique
        </button>

        <h1 style={{ marginBottom: '10px', fontSize: '24px' }}>Carte d'Évaluation</h1>
        <p style={{ color: '#64748b', marginBottom: '30px' }}>Votre note détaillée et le journal de correction.</p>

        {/* CARTE DE RÉSULTAT */}
        <div className={`assessment-card ${!isPassed ? 'failed' : ''}`}>
          
          <div className={`assessment-header ${!isPassed ? 'failed' : ''}`}>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', border: '1px solid rgba(255,255,255,0.4)', padding: '4px 10px', borderRadius: '20px' }}>
              EXAMEN TERMINÉ
            </span>
            <h2 style={{ fontSize: '32px', margin: '20px 0 0 0' }}>React JS</h2>
          </div>

          <div className="assessment-body">
            <div className="score-circle">
              80%
            </div>
            
            <h3 style={{ color: isPassed ? '#10b981' : '#ef4444', marginBottom: '10px' }}>
              {isPassed ? 'Félicitations ! Vous avez réussi.' : 'Dommage. Vous avez échoué.'}
            </h3>
            <p style={{ color: '#64748b', fontSize: '14px', maxWidth: '400px', margin: '0 auto 30px' }}>
              Excellent travail ! Vous avez démontré une solide compréhension des concepts abordés dans cet examen.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '30px', borderTop: '1px solid #e2e8f0', paddingTop: '30px' }}>
              <div>
                <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', fontSize: '18px' }}>4/5</p>
                <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Score Brut</p>
              </div>
              <div>
                <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', fontSize: '18px', color: '#10b981' }}>✅ 4</p>
                <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Correctes</p>
              </div>
              <div>
                <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', fontSize: '18px', color: '#ef4444' }}>❌ 1</p>
                <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Fausses</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <button className="btn-outline" onClick={() => navigate('/student')} style={{ padding: '10px 20px' }}>Tableau de bord</button>
              <button style={{ background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', padding: '10px 20px', fontWeight: 'bold', cursor: 'pointer' }}>Refaire l'examen</button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}