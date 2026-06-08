import React, { useState } from 'react';

export default function AddQuestions() {
  const [questionText, setQuestionText] = useState("");
  const [questionType, setQuestionType] = useState("QCM");
  
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(0);

  const [correctTrueFalse, setCorrectTrueFalse] = useState("Vrai");

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    console.log("Question added:", { questionType, questionText, options, correctOptionIndex });
  };

  return (
    <div className="page-container" style={{ maxWidth: '800px' }}>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Ajouter des questions à l'examen</h1>
      </div>

      <form className="glass-form-container" onSubmit={handleAddQuestion}>
        
        <label className="form-label">Type de question :</label>
        <select 
          className="form-select" 
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}
        >
          <option value="QCM">QCM (Choix Multiples)</option>
          <option value="Vrai / Faux">Vrai / Faux</option>
        </select>

        <label className="form-label">Texte de la question :</label>
        <input 
          type="text" 
          className="form-input" 
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Entrez votre question ici..."
          required
        />

        <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          
          {questionType === 'QCM' ? (
            <>
              <label className="form-label" style={{ color: 'var(--accent-cyan)' }}>
                Options de réponse (Cochez la bonne réponse) :
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
                {options.map((opt, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <input 
                      type="radio" 
                      name="correct-option"
                      checked={correctOptionIndex === index}
                      onChange={() => setCorrectOptionIndex(index)}
                      style={{ transform: 'scale(1.5)', accentColor: 'var(--accent-cyan)', cursor: 'pointer' }}
                    />
                    <input 
                      type="text" 
                      className="form-input" 
                      style={{ margin: 0 }} 
                      placeholder={`Option ${index + 1}`}
                      value={opt}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                      required
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <label className="form-label" style={{ color: 'var(--accent-cyan)' }}>
                Quelle est la bonne réponse ?
              </label>
              <div style={{ display: 'flex', gap: '30px', marginTop: '15px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f8fafc', cursor: 'pointer' }}>
                  <input 
                    type="radio" 
                    name="true-false"
                    checked={correctTrueFalse === 'Vrai'}
                    onChange={() => setCorrectTrueFalse('Vrai')}
                    style={{ transform: 'scale(1.5)', accentColor: 'var(--accent-cyan)' }}
                  />
                  Vrai
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f8fafc', cursor: 'pointer' }}>
                  <input 
                    type="radio" 
                    name="true-false"
                    checked={correctTrueFalse === 'Faux'}
                    onChange={() => setCorrectTrueFalse('Faux')}
                    style={{ transform: 'scale(1.5)', accentColor: 'var(--accent-cyan)' }}
                  />
                  Faux
                </label>
              </div>
            </>
          )}
        </div>

        <button type="submit" className="btn-start" style={{ width: 'auto', padding: '12px 24px', marginTop: '30px' }}>
          + Ajouter cette question
        </button>

      </form>

      <h3 style={{ color: '#f8fafc', fontSize: '18px', marginTop: '30px', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        Questions ajoutées (0)
      </h3>
    </div>
  );
}