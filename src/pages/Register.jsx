import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth/Auth.css';

export default function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState('etudiant'); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Création du compte :", { ...formData, role });
    
    // Redirection en fonction du rôle pour l'exemple
    if (role === 'etudiant') navigate('/student');
    if (role === 'enseignant') navigate('/teacher');
    if (role === 'admin') navigate('/admin');
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        
        <h1 className="auth-title">Créer un compte</h1>
        <p className="auth-subtitle">Inscrivez-vous pour accéder à la plateforme</p>

        <form onSubmit={handleSubmit}>
          
          <div className="auth-form-group">
            <label className="auth-label">Nom Complet</label>
            <input 
              type="text" 
              className="auth-input"
              placeholder="ex. Karim Alami"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="auth-form-group">
            <label className="auth-label">Adresse Email</label>
            <input 
              type="email" 
              className="auth-input"
              placeholder="ex. nom@hightech.edu"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="auth-form-group">
            <label className="auth-label">Mot de passe</label>
            <input 
              type="password" 
              className="auth-input"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <label className="auth-label">Sélectionnez votre rôle</label>
          <div className="role-grid">
            
            <div 
              className={`role-card ${role === 'etudiant' ? 'selected' : ''}`}
              onClick={() => setRole('etudiant')}
            >
              <svg className="role-icon" viewBox="0 0 24 24">
                <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z"/>
              </svg>
              <span className="role-text">Espace<br/>Étudiant</span>
            </div>

            {/* Carte Enseignant */}
            <div 
              className={`role-card ${role === 'enseignant' ? 'selected' : ''}`}
              onClick={() => setRole('enseignant')}
            >
              {/* Icône de badge/professeur (SVG) */}
              <svg className="role-icon" viewBox="0 0 24 24">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/>
              </svg>
              <span className="role-text">Espace<br/>Enseignant</span>
            </div>

            {/* Carte Admin */}
            <div 
              className={`role-card ${role === 'admin' ? 'selected' : ''}`}
              onClick={() => setRole('admin')}
            >
              {/* Icône de bouclier/sécurité (SVG) */}
              <svg className="role-icon" viewBox="0 0 24 24">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.92V12H5V6.3L12 3.19V11.99Z"/>
              </svg>
              <span className="role-text">Espace<br/>Admin</span>
            </div>

          </div>

          <button type="submit" className="auth-button">
            {/* Icône d'ajout d'utilisateur dans le bouton */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C12.79 4 11 5.79 11 8C11 10.21 12.79 12 15 12ZM6 10V7H4V10H1V12H4V15H6V12H9V10H6ZM15 14C12.33 14 7 15.34 7 18V20H23V18C23 15.34 17.67 14 15 14Z"/>
            </svg>
            S'inscrire
          </button>

        </form>

        <div className="auth-footer">
          Vous avez déjà un compte ? <Link to="/login" className="auth-link">Se connecter</Link>
        </div>

      </div>
    </div>
  );
}