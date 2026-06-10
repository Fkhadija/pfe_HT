import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Student/Dashboard.css'; // On réutilise le super style du Dashboard !

export default function CreateExam() {
  const navigate = useNavigate();
  
  // Le state pour stocker les infos de l'examen
  const [examData, setExamData] = useState({
    title: '',
    description: '',
    date: '',
    duration: '',
    attempts: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Examen configuré :", examData);
    // On passe à l'étape suivante : Ajouter les questions
    navigate('/teacher/create/questions');
  };

  return (
    <div className="dashboard-layout">
      
      {/* --- SIDEBAR ENSEIGNANT --- */}
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
          
          <Link to="/teacher" className="nav-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            Tableau de bord
          </Link>
          <Link to="/teacher/create" className="nav-item active">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            Créer un examen
          </Link>
        </nav>
      </aside>

      {/* --- CONTENU PRINCIPAL --- */}
      <main className="dashboard-main">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <h1 style={{ marginBottom: '10px', fontSize: '24px' }}>Paramètres de l'examen</h1>
          <p style={{ color: '#64748b', marginBottom: '30px' }}>Définissez les règles générales avant d'ajouter vos questions.</p>

          <div className="content-card">
            <form onSubmit={handleSubmit}>
              
              {/* Titre */}
              <div className="auth-form-group" style={{ marginBottom: '20px' }}>
                <label className="auth-label">Titre de l'examen</label>
                <input 
                  type="text" 
                  className="auth-input" 
                  placeholder="Ex: Examen Final Programmation Web" 
                  required 
                  value={examData.title} 
                  onChange={e => setExamData({...examData, title: e.target.value})} 
                />
              </div>

              {/* Description */}
              <div className="auth-form-group" style={{ marginBottom: '20px' }}>
                <label className="auth-label">Instructions / Description</label>
                <textarea 
                  className="auth-input" 
                  placeholder="Consignes pour les étudiants..." 
                  rows="4" 
                  required
                  value={examData.description} 
                  onChange={e => setExamData({...examData, description: e.target.value})} 
                  style={{ resize: 'vertical' }}
                />
              </div>

              {/* Grille pour Date, Durée et Tentatives */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                
                <div className="auth-form-group">
                  <label className="auth-label">Date de disponibilité</label>
                  <input 
                    type="datetime-local" 
                    className="auth-input" 
                    required
                    value={examData.date} 
                    onChange={e => setExamData({...examData, date: e.target.value})} 
                  />
                </div>

                <div className="auth-form-group">
                  <label className="auth-label">Durée (en minutes)</label>
                  <input 
                    type="number" 
                    className="auth-input" 
                    placeholder="Ex: 60" 
                    min="1" 
                    required
                    value={examData.duration} 
                    onChange={e => setExamData({...examData, duration: e.target.value})} 
                  />
                </div>

                <div className="auth-form-group">
                  <label className="auth-label">Tentatives autorisées</label>
                  <input 
                    type="number" 
                    className="auth-input" 
                    min="1" 
                    required
                    value={examData.attempts} 
                    onChange={e => setExamData({...examData, attempts: e.target.value})} 
                  />
                </div>

              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '30px 0' }} />

              {/* Boutons */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                <button type="button" className="btn-outline" style={{ padding: '12px 24px', fontWeight: 'bold' }} onClick={() => navigate('/teacher')}>
                  Annuler
                </button>
                <button type="submit" className="auth-button" style={{ width: 'auto', padding: '12px 24px' }}>
                  Continuer vers les questions
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '8px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>

            </form>
          </div>

        </div>
      </main>
    </div>
  );
}