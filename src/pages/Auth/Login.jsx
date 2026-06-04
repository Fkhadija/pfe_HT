import { useNavigate } from 'react-router-dom';

function Login() {
  // Cet outil nous permettra de rediriger l'utilisateur après sa connexion
  const navigate = useNavigate();

  // Fonction factice pour simuler la connexion pour le moment
  const handleLogin = (e) => {
    e.preventDefault(); // Empêche la page de se recharger
    // Pour l'instant, on redirige directement vers l'espace étudiant pour tester
    navigate('/student');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>Connexion à la Plateforme</h2>
      
      {/* Formulaire très basique */}
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '15px' }}>
        
        <div>
          <label>Email :</label>
          <input type="email" required style={{ width: '100%', padding: '8px' }} />
        </div>

        <div>
          <label>Mot de passe :</label>
          <input type="password" required style={{ width: '100%', padding: '8px' }} />
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Se connecter
        </button>
        
      </form>
    </div>
  );
}

export default Login;