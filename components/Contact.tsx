import React from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-apple-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-500">
            Une question ? Un devis ? Nous sommes à votre écoute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Phone Card */}
          <a href="tel:0640199275" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[250px]">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-500 mb-2">Téléphone</h3>
            <p className="text-3xl font-bold text-gray-900">06 40 19 92 75</p>
            <span className="mt-4 text-sm text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Appeler maintenant &rarr;
            </span>
          </a>

          {/* Email Card */}
          <a href="mailto:s.david037@laposte.net" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[250px]">
             <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-500 mb-2">Email</h3>
            <p className="text-xl font-bold text-gray-900 break-all">s.david037@laposte.net</p>
             <span className="mt-4 text-sm text-yellow-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Envoyer un message &rarr;
            </span>
          </a>

          {/* Address Card */}
           <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col items-center justify-center min-h-[250px] text-center md:col-span-2 lg:col-span-1">
             <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-500 mb-2">Adresse</h3>
            <p className="text-xl font-bold text-gray-900">
              5 rue Jules Ferry - Entrée B<br/>
              88190 Golbey
            </p>
          </div>

        </div>

        {/* Bottom Action */}
        <div className="mt-12 text-center">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Facebook size={20} />
            <span>Suivez l'actualité de l'entreprise sur Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;