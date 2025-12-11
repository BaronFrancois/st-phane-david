import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Golbey & Grand Est
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-6 max-w-4xl">
          Votre espace,<br /> 
          <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            notre expertise.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
          Entretien d'espaces verts, nettoyage professionnel et aide à domicile.
          Une équipe humaine à votre service.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300"
          >
            Nous contacter
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="flex items-center justify-center bg-gray-100 text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-all duration-300"
          >
            Nos services
          </a>
        </div>
      </div>

      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] bg-gradient-to-tr from-green-100/50 to-blue-100/50 rounded-full blur-3xl opacity-60 pointer-events-none" />
    </section>
  );
};

export default Hero;