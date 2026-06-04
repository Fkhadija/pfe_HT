import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TakeExam() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Temps écoulé ! Soumission automatique de l'examen[cite: 1].");
      navigate('/student');
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Examen soumis avec succès ! Correction automatique en cours...[cite: 1]");
    navigate('/student');
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      
      
      <div className="bento-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', padding: '16px 24px' }}>
        <h2 style={{ margin: 0, color: 'var(--primary-color)' }}>Examen de certification #{id}</h2>
        
        
        <div style={{ 
          backgroundColor: timeLeft < 60 ? '#fee2e2' : '#e0f2fe', 
          color: timeLeft < 60 ? 'var(--danger-color)' : '#0284c7', 
          padding: '8px 16px', 
          borderRadius: '20px', 
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          ⏱ {formatTime(timeLeft)}
        </div>
      </div>

      
      <form onSubmit={handleSubmit} className="bento-card">
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px', fontSize: '1.15rem' }}>
            Question 1 : Que signifie l'acronyme DOM en développement web ?
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Document Object Model', 'Data Object Management', 'Digital Oriented Module'].map((option, index) => (
              <label key={index} style={{ 
                display: 'flex', alignItems: 'center', gap: '12px', 
                padding: '16px', border: '1px solid #e2e8f0', 
                borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <input type="radio" name="q1" value={option} required style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                <span style={{ color: 'var(--text-main)', fontSize: '1rem' }}>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
          <button type="submit" className="btn-primary" style={{ padding: '12px 30px', fontSize: '1.05rem' }}>
            Soumettre mes réponses
          </button>
        </div>
      </form>
    </div>
  );
}

export default TakeExam;