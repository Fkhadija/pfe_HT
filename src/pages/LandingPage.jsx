import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default function LandingPage() {
  return (
    <div className="landing-container">
      
      {/* 1. SECTION HERO (En-tête) */}
      <section className="section-wrapper hero-bg">
        <div className="animate-fade-up" style={{ textAlign: 'center' }}>
          <h1 className="section-title" style={{ fontSize: '48px' }}>
            La certification repensée avec <span style={{ color: '#2563eb' }}>QuizPlatform</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '18px', maxWidth: '700px' }}>
            Créez, gérez et évaluez des examens en ligne dans un environnement sécurisé. 
            Une solution complète conçue pour l'excellence académique.
          </p>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <Link to="/register" style={{ background: '#2563eb', color: 'white', padding: '15px 30px', borderRadius: '8px', fontWeight: '600', textDecoration: 'none' }}>
              Créer mon compte gratuit
            </Link>
            <Link to="/login" style={{ background: 'white', color: '#0f172a', border: '1px solid #cbd5e1', padding: '15px 30px', borderRadius: '8px', fontWeight: '600', textDecoration: 'none' }}>
              Accéder à mon espace
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SECTION FONCTIONNALITÉS (Les points forts du cahier des charges) */}
      <section className="section-wrapper">
        <h2 className="section-title">Pourquoi choisir notre plateforme ?</h2>
        <p className="section-subtitle">Découvrez les outils qui rendent notre solution unique.</p>
        
        <div className="features-grid">
          
          {/* Carte 1 : Anti-triche */}
          <div className="feature-card animate-fade-up animate-delay-1">
            <div className="feature-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Sécurité Anti-Triche</h3>
            <p>Détection intelligente des changements d'onglets, blocage du copier/coller et chronomètre sécurisé côté serveur.</p>
          </div>

          {/* Carte 2 : Correction automatique */}
          <div className="feature-card animate-fade-up animate-delay-2">
            <div className="feature-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            </div>
            <h3>Correction Automatique</h3>
            <p>Fini les heures de notation. Les QCM et questions Vrai/Faux sont corrigés instantanément dès la soumission.</p>
          </div>

          {/* Carte 3 : Export PDF */}
          <div className="feature-card animate-fade-up animate-delay-1">
            <div className="feature-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3>Attestations PDF</h3>
            <p>Génération automatique d'attestations de réussite et de relevés de notes téléchargeables au format PDF.</p>
          </div>

        </div>
      </section>

      {/* 3. SECTION COMMENT ÇA MARCHE */}
      <section className="section-wrapper step-bg">
        <h2 className="section-title">Un processus simple et rapide</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', maxWidth: '900px', margin: '40px auto 0' }}>
          
          <div style={{ flex: '1', minWidth: '250px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', fontWeight: '900', color: '#bfdbfe', marginBottom: '10px' }}>1</div>
            <h4 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '10px' }}>Création</h4>
            <p style={{ color: '#64748b', fontSize: '14px' }}>L'enseignant crée l'examen, définit le barème et la durée autorisée.</p>
          </div>

          <div style={{ flex: '1', minWidth: '250px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', fontWeight: '900', color: '#bfdbfe', marginBottom: '10px' }}>2</div>
            <h4 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '10px' }}>Passage</h4>
            <p style={{ color: '#64748b', fontSize: '14px' }}>Les étudiants accèdent au test depuis leur espace sécurisé.</p>
          </div>

          <div style={{ flex: '1', minWidth: '250px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', fontWeight: '900', color: '#bfdbfe', marginBottom: '10px' }}>3</div>
            <h4 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '10px' }}>Résultats</h4>
            <p style={{ color: '#64748b', fontSize: '14px' }}>Le système calcule les scores et met à jour le classement général.</p>
          </div>

        </div>
      </section>

      {/* 4. SECTION CONTACT (Centrée et épurée) */}
      <section className="section-wrapper">
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">Une question ?</h2>
          <p className="section-subtitle" style={{ marginBottom: '30px' }}>Notre support technique est disponible pour vous accompagner.</p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="email" placeholder="Votre adresse email" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #cbd5e1' }} required />
            <textarea placeholder="Votre message..." rows="4" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #cbd5e1', resize: 'vertical' }} required></textarea>
            <button type="button" style={{ background: '#0f172a', color: 'white', padding: '15px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}>
              Envoyer le message
            </button>
          </form>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} QuizPlatform - Projet Tutoré EdTech.</p>
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <span style={{ fontSize: '12px' }}>Plateforme d'examens en ligne sécurisée</span>
        </div>
      </footer>

    </div>
  );
}