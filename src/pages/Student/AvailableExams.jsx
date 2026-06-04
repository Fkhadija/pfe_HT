import { useNavigate } from 'react-router-dom';

function AvailableExams() {
  const navigate = useNavigate();

  const examsList = [
    { id: 1, title: "QCM React.js Débutant", duration: "30 min", questionsCount: 10, status: "Nouveau" },
    { id: 2, title: "Bases de données SQL", duration: "45 min", questionsCount: 15, status: "Obligatoire" },
    { id: 3, title: "Architecture Réseau", duration: "60 min", questionsCount: 20, status: "Nouveau" },
  ];

  const handleStartExam = (examId) => {
    navigate(`/student/exam/${examId}`);
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 className="title-elegant"> Mes Examens Disponibles</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
        Sélectionnez un examen pour commencer. Le chronomètre démarrera automatiquement.
      </p>

      
      <div className="bento-container">
        {examsList.map((exam) => (
          <div key={exam.id} className="bento-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <h3 style={{ margin: 0, color: 'var(--primary-color)', fontSize: '1.2rem' }}>{exam.title}</h3>
                
                <span className={exam.status === 'Nouveau' ? 'badge-success' : 'badge-danger'} style={{ fontSize: '0.75rem' }}>
                  {exam.status}
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>
                ⏱ Durée: {exam.duration}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                 {exam.questionsCount} questions
              </p>
            </div>

            
            <button 
              className="btn-primary"
              onClick={() => handleStartExam(exam.id)}
              style={{ width: '100%' }}
            >
              Démarrer l'examen
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailableExams;