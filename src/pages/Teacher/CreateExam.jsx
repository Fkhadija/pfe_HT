import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateExam() {
  const navigate = useNavigate();
  
  const [examData, setExamData] = useState({
    title: '',
    duration: '',
    date: '',
    attempts: 1
  });

  
  const handleChange = (e) => {
    setExamData({ ...examData, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/teacher/create/questions'); 
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Créer un nouvel examen</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Titre de l'examen :</label>
          <input type="text" name="title" onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Durée (en minutes) :</label>
          <input type="number" name="duration" min="5" onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Date de disponibilité :</label>
          <input type="date" name="date" onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Nombre de tentatives :</label>
          <input type="number" name="attempts" min="1" defaultValue="1" onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>

        <button 
          type="submit" 
          style={{ padding: '12px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', marginTop: '10px' }}
        >
          Étape suivante : Ajouter les questions
        </button>
        
      </form>
    </div>
  );
}

export default CreateExam;