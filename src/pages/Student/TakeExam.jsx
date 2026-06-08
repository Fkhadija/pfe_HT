import React, { useState } from 'react';

export default function TakeExam() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="page-container" style={{ maxWidth: '800px' }}>
      
      <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="dashboard-title" style={{ fontSize: '24px' }}>Examen de certification #1</h1>
        <div style={{ background: 'rgba(6, 182, 212, 0.1)', border: '1px solid var(--accent-cyan)', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold', color: 'var(--accent-cyan)' }}>
          ⏱ 9:57
        </div>
      </div>

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
        <button className="btn-start" style={{ width: 'auto', padding: '12px 30px' }}>
          Soumettre mes réponses
        </button>
      </div>

    </div>
  );
}