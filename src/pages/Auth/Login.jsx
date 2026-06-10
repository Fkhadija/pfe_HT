import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Redirection vers l'espace étudiant pour tester
    navigate('/student'); 
  };

  return (
    /* L'encadré blanc va s'afficher grâce à ces classes */
    <div className="auth-wrapper">
      <div className="auth-card" style={{ maxWidth: '450px' }}>
        
        <h1 className="auth-title">Bon retour</h1>
        <p className="auth-subtitle">Entrez vos identifiants pour accéder à la plateforme</p>

        <form onSubmit={handleLogin}>
          
          <div className="auth-form-group">
            <label className="auth-label">ADRESSE EMAIL</label>
            <input 
              type="email" 
              className="auth-input"
              placeholder="ex. etudiant@quiz.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="auth-form-group">
            <label className="auth-label">MOT DE PASSE</label>
            <input 
              type="password" 
              className="auth-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Se connecter
          </button>

        </form>

        <div className="auth-footer">
          Vous n'avez pas de compte ? <Link to="/register" className="auth-link">Créer un compte</Link>
        </div>

      </div>
    </div>
  );
}