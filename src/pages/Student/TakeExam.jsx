import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TakeExam() {
  const navigate = useNavigate();
  
  // États de l'examen
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(600); 
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // États pour la sécurité anti-triche
  const [cheatWarnings, setCheatWarnings] = useState(0);
  const MAX_WARNINGS = 3; // L'examen s'arrête après 3 tentatives de triche

  // 1. FONCTION DE SOUMISSION (Auto-Submit ou Manuelle)
  const submitExam = useCallback((reason = "Terminé") => {
    setIsSubmitted(true);
    alert(`Examen soumis ! Raison : ${reason}`);
    
    // page de résultat
    navigate('/student/result'); 
  }, [navigate]);

  // 2. LOGIQUE DU CHRONOMÈTRE INTELLIGENT
  useEffect(() => {
    if (timeLeft <= 0) {
      submitExam("Temps écoulé (Auto-submit)"); // Règle: Auto-submit à la fin du temps
      return;
    }

    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => prev - 1); // Règle: Décompte automatique
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft, submitExam]);

  // 3. LOGIQUE ANTI-TRICHE : DÉTECTION DE CHANGEMENT D'ONGLET
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && !isSubmitted) {
        // L'étudiant a quitté l'onglet (pour chercher sur Google par exemple)
        setCheatWarnings((prev) => {
          const newWarnings = prev + 1;
          if (newWarnings >= MAX_WARNINGS) {
            submitExam("Triche détectée : Changement d'onglet répété");
          } else {
            alert(`ATTENTION ! Ne quittez pas la page de l'examen. Avertissement ${newWarnings}/${MAX_WARNINGS}`);
          }
          return newWarnings;
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isSubmitted, submitExam]);

  // Formatage du temps (MM:SS)
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // 4. LOGIQUE ANTI-TRICHE : BLOCAGE DU COPIER/COLLER
  const preventCopyPaste = (e) => {
    e.preventDefault();
    alert("Le copier/coller est désactivé pendant l'examen.");
  };

  return (
    <div 
      className="page-container" 
      style={{ maxWidth: '800px', userSelect: 'none' }} 
      onCopy={preventCopyPaste} 
      onPaste={preventCopyPaste}
    >
      
      <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="dashboard-title" style={{ fontSize: '24px' }}>Examen de certification #1</h1>
        
     
        <div style={{ 
          background: timeLeft < 60 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(6, 182, 212, 0.1)', 
          border: `1px solid ${timeLeft < 60 ? '#ef4444' : 'var(--accent-cyan)'}`, 
          padding: '10px 20px', 
          borderRadius: '30px', 
          fontWeight: 'bold', 
          color: timeLeft < 60 ? '#ef4444' : 'var(--accent-cyan)',
          transition: 'all 0.3s ease'
        }}>
          ⏱ {formatTime(timeLeft)}
        </div>
      </div>

      {cheatWarnings > 0 && (
        <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '10px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #ef4444' }}>
          ⚠️ Avertissement de sécurité : {cheatWarnings}/{MAX_WARNINGS}
        </div>
      )}

      <div className="question-container">
        <h2 className="question-title">
          Question 1 : Que signifie l'acronyme DOM en développement web ?
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
          {['Document Object Model', 'Data Oriented Module', 'Digital Oriented Module'].map((option, index) => (
            <label 
              key={index} 
              className="option-label"
              style={{ 
                borderColor: selectedOption === index ? 'var(--accent-cyan)' : 'var(--glass-border)',
                background: selectedOption === index ? 'rgba(6, 182, 212, 0.1)' : 'rgba(255, 255, 255, 0.03)'
              }}
            >
              <input 
                type="radio" 
                name="answer" 
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
                style={{ marginRight: '15px', transform: 'scale(1.2)', accentColor: 'var(--accent-cyan)' }}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <button 
          className="btn-start" 
          style={{ width: 'auto', padding: '12px 30px' }}
          onClick={() => submitExam("Soumission manuelle par l'étudiant")}
        >
          Soumettre mes réponses
        </button>
      </div>

    </div>
  );
}