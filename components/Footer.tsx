import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-semibold text-gray-900">Stéphane DAVID</p>
          <p className="text-sm text-gray-500">Entretien espaces verts & nettoyage</p>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <a href="#home" className="hover:text-gray-900 transition-colors">Accueil</a>
          <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">À propos</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        <div className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Stéphane DAVID. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;