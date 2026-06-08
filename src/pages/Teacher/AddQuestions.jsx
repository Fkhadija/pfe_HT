import React, { useState } from 'react';

export default function AddQuestions() {
  const [questionText, setQuestionText] = useState("a=3, b=4 et c=a-b le resultat est");
  const [questionType, setQuestionType] = useState("Vrai / Faux");

  return (
    <div className="page-container" style={{ maxWidth: '800px' }}>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Ajouter des questions à l'examen</h1>
      </div>

      {/* Notice the new class: glass-form-container */}
      <div className="glass-form-container">
        
        <label className="form-label">Type de question :</label>
        {/* Notice the new class: form-select */}
        <select 
          className="form-select" 
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}
        >
          <option value="Vrai / Faux">Vrai / Faux</option>
          <option value="QCM">QCM (Choix Multiples)</option>
        </select>

        <label className="form-label">Texte de la question :</label>
        {/* Notice the new class: form-input */}
        <input 
          type="text" 
          className="form-input" 
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Entrez votre question ici..."
        />

        {/* We reuse the beautiful btn-start from the student page! */}
        <button className="btn-start" style={{ width: 'auto', padding: '12px 24px', marginTop: '10px' }}>
          + Ajouter cette question
        </button>

      </div>

      <h3 style={{ color: '#f8fafc', fontSize: '18px', marginTop: '30px' }}>
        Questions ajoutées (0)
      </h3>
    </div>
  );
}