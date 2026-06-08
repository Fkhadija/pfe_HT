import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AvailableExams() {
  const navigate = useNavigate();
  
  const exams = [
    { id: 1, title: "QCM React.js Débutant", duration: "30 min", questions: 10, tag: "Nouveau" },
    { id: 2, title: "Bases de données SQL", duration: "45 min", questions: 15, tag: "Obligatoire" },
    { id: 3, title: "Architecture Réseau", duration: "60 min", questions: 20, tag: "Nouveau" }
  ];

  return (
    <div className="page-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Mes Examens Disponibles</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>
          Sélectionnez un examen pour commencer. Le chronomètre démarrera automatiquement.
        </p>
      </div>

      <div className="cards-grid">
        {exams.map(exam => (
          <div key={exam.id} className="quiz-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h2 className="quiz-title">{exam.title}</h2>
              <span style={{ fontSize: '12px', color: 'var(--accent-cyan)', background: 'rgba(6, 182, 212, 0.1)', padding: '4px 8px', borderRadius: '8px' }}>
                {exam.tag}
              </span>
            </div>
            
            <div className="quiz-meta">
              ⏱ Durée: {exam.duration}<br />
              📝 {exam.questions} questions
            </div>

            <button className="btn-start" onClick={() => navigate(`/student/exam/${exam.id}`)}>
              Démarrer l'examen
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}