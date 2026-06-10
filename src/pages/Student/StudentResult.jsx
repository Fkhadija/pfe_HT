import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function StudentResult() {
  const navigate = useNavigate();

   const examData = {
    title: "Examen de certification #1",
    score: 18,
    total: 20,
    percentage: 90,
    timeSpent: "8:45",
    rank: 2, 
    badge: "🏆 Expert Web" 
  };

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div className="page-container" style={{ maxWidth: '800px' }}>
      
      {/* Zone principale des résultats */}
      <div className="glass-form-container" id="pdf-content" style={{ textAlign: 'center', padding: '50px 30px' }}>
        
        <h1 className="dashboard-title" style={{ fontSize: '28px', marginBottom: '10px' }}>
          Résultat de l'examen
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '16px', marginBottom: '40px' }}>
          {examData.title}
        </p>

        {/* Cercle de Score (Calcul de score & Affichage) */}
        <div style={{ 
          width: '150px', 
          height: '150px', 
          borderRadius: '50%', 
          border: `8px solid ${examData.percentage >= 50 ? 'var(--accent-cyan)' : '#ef4444'}`,
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          margin: '0 auto 30px',
          background: 'rgba(0,0,0,0.2)'
        }}>
          <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#fff' }}>
            {examData.score}
          </span>
          <span style={{ fontSize: '18px', color: 'var(--text-muted)' }}>
            / {examData.total}
          </span>
        </div>

        {/* Système de classement et Badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
          <div style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid #8b5cf6', padding: '15px 25px', borderRadius: '12px' }}>
            <div style={{ fontSize: '12px', color: '#c4b5fd', textTransform: 'uppercase' }}>Classement</div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff' }}>#{examData.rank} sur 150</div>
          </div>
          
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', padding: '15px 25px', borderRadius: '12px' }}>
            <div style={{ fontSize: '12px', color: '#a7f3d0', textTransform: 'uppercase' }}>Badge Obtenu</div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff' }}>{examData.badge}</div>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)' }}>Temps passé : {examData.timeSpent} minutes</p>

      </div>

      <div className="no-print" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <button 
          className="btn-outline" 
          onClick={() => navigate('/student')}
          style={{ padding: '12px 24px', color: '#fff', borderColor: 'var(--glass-border)' }}
        >
          Retour au tableau de bord
        </button>
        
        <button 
          className="btn-start" 
          onClick={handleExportPDF}
          style={{ width: 'auto', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          📄 Télécharger l'Attestation (PDF)
        </button>
      </div>

    </div>
  );
}