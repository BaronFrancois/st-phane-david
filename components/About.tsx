import React from 'react';
import { Users, Heart, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/800/600?grayscale" 
                alt="Équipe Stéphane DAVID" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Float Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">5 Personnes</p>
                  <p className="text-sm text-gray-500">À votre service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Plus qu'une entreprise,<br />
              <span className="text-gray-400">une famille.</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              La micro-entreprise Stéphane DAVID est implantée à Golbey dans les Vosges. En choisissant nos services, vous trouvez des personnes humaines, à votre écoute.
            </p>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                 <div className="flex-shrink-0 mt-1">
                   <Heart className="text-red-500" size={24} />
                 </div>
                 <div>
                   <h4 className="text-lg font-bold text-gray-900">Valeurs Humaines</h4>
                   <p className="text-gray-500">"La meilleure référence de l'entreprise Stéphane DAVID, ce sont ses clients..."</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="flex-shrink-0 mt-1">
                   <MapPin className="text-blue-500" size={24} />
                 </div>
                 <div>
                   <h4 className="text-lg font-bold text-gray-900">Zone d'intervention élargie</h4>
                   <p className="text-gray-500">
                     Basés à Golbey (88), nous intervenons dans tout le Grand Est : Vosges, Meuse (55), Haut-Rhin (68), Bas-Rhin (67), Meurthe-et-Moselle (54), Haute-Saône (70) et Moselle (57).
                   </p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;