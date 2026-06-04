import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddQuestions() {
  const navigate = useNavigate();

  const [questionsList, setQuestionsList] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState({
    type: 'QCM', 
    text: '',
    optionA: '',
    optionB: '',
    correctAnswer: 'A'
  });

  const handleChange = (e) => {
    setCurrentQuestion({ ...currentQuestion, [e.target.name]: e.target.value });
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    setQuestionsList([...questionsList, currentQuestion]);
    
    
    setCurrentQuestion({
      type: 'QCM',
      text: '',
      optionA: '',
      optionB: '',
      correctAnswer: 'A'
    });
  };

  const handleFinishExam = () => {
    alert(`Bravo ! L'examen a été enregistré avec ${questionsList.length} question(s).`);
    navigate('/teacher'); 
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Ajouter des questions à l'examen</h2>

      <form onSubmit={handleAddQuestion} style={{ backgroundColor: '#f4f4f9', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Type de question :</label>
          <select name="type" value={currentQuestion.type} onChange={handleChange} style={{ marginLeft: '10px', padding: '5px' }}>
            <option value="QCM">QCM (Choix multiple)</option>
            <option value="VraiFaux">Vrai / Faux</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Texte de la question :</label>
          <input type="text" name="text" value={currentQuestion.text} onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>

        {currentQuestion.type === 'QCM' && (
          <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
            <div style={{ flex: 1 }}>
              <label>Option A :</label>
              <input type="text" name="optionA" value={currentQuestion.optionA} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label>Option B :</label>
              <input type="text" name="optionB" value={currentQuestion.optionB} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
            </div>
          </div>
        )}

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          + Ajouter cette question
        </button>
      </form>

      
      <h3>Questions ajoutées ({questionsList.length})</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {questionsList.map((q, index) => (
          <li key={index} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
            <strong>{index + 1}. {q.text}</strong> ({q.type})
          </li>
        ))}
      </ul>

      {questionsList.length > 0 && (
        <button onClick={handleFinishExam} style={{ padding: '15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%', fontSize: '16px', marginTop: '20px' }}>
         Terminer et publier l'examen
        </button>
      )}
    </div>
  );
}

export default AddQuestions;