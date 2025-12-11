import React from 'react';
import { Shovel, Sparkles, Home, ShoppingBag, PenTool, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-apple-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Tout pour votre confort.
          </h2>
          <p className="text-xl text-gray-500">
            De l'entretien de votre jardin au nettoyage de vos vitres, nous simplifions votre quotidien avec professionnalisme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          
          {/* Card 1: Espaces Verts (Large) */}
          <div className="group md:col-span-2 relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=2000" 
              alt="Jardin et espaces verts" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            
            <div className="relative z-10 flex flex-col h-full justify-between p-8">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                  <Shovel size={24} />
                </div>
                <ArrowUpRight className="text-white/70 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Espaces Verts</h3>
                <p className="text-gray-200 text-lg leading-relaxed max-w-md">
                  Tonte, taille de haies, entretien complet de vos jardins. Profitez d'un extérieur impeccable sans effort.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Nettoyage (Tall) */}
          <div className="group md:row-span-2 relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
             <img 
              src="https://images.unsplash.com/photo-1581578731117-104f2a8d23e9?auto=format&fit=crop&q=80&w=1000" 
              alt="Nettoyage professionnel" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            
            <div className="relative z-10 flex flex-col h-full p-8">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 text-white border border-white/30">
                <Sparkles size={24} />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">Nettoyage<br/>Pro & Privé</h3>
              
              <div className="space-y-4 mt-auto">
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-colors cursor-default">
                  <p className="text-white font-medium">Locaux Pro</p>
                  <p className="text-sm text-gray-300">Bureaux, commerces...</p>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-colors cursor-default">
                  <p className="text-white font-medium">Particuliers</p>
                  <p className="text-sm text-gray-300">Ménage, vitres, sols...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Aide à domicile */}
          <div className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
            <img 
              src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&fit=crop&q=80&w=1000" 
              alt="Aide à domicile" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            
            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <div className="absolute top-8 left-8 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                <Home size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Aide à domicile</h3>
              <p className="text-gray-200 text-sm">
                Assistance pour les tâches du quotidien.
              </p>
            </div>
          </div>

          {/* Card 4: Services de proximité */}
          <div className="group relative overflow-hidden rounded-3xl bg-black text-white shadow-sm hover:shadow-xl transition-all duration-500">
            {/* Subtle textured image for the black card */}
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" 
              alt="Services" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity grayscale"
            />
            <div className="relative z-10 h-full flex flex-col justify-between p-8">
              <div className="w-12 h-12 bg-gray-800/80 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                <ShoppingBag size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Services +</h3>
                <p className="text-gray-400 text-sm">
                  Courses, pharmacie, et petits services de proximité.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5: Bricolage (Span 2) */}
          <div className="group md:col-span-2 relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
            <img 
              src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&q=80&w=1000" 
              alt="Bricolage" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full p-8 gap-6">
              <div className="max-w-lg">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 text-white border border-white/30">
                  <PenTool size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Petit Bricolage</h3>
                <p className="text-gray-200">
                  Besoin d'aide pour poser une étagère, une tringle à rideaux ou de petits travaux de peinture ?
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;