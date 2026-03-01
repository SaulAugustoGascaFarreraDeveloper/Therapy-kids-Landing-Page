'use client';

import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image/Illustration Side */}
          <div className="flex-1 relative">
            <div className="relative max-w-md mx-auto">
              {/* Main profile card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                {/* Decorative rainbow arc */}
                <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>

                {/* Profile illustration */}
                <div className="w-48 h-48 mx-auto mb-6 relative">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                    
                     <Image 
                          src={'https://res.cloudinary.com/dxifyrkhq/image/upload/v1772224204/sofia_annoue.jpg'}
                          alt="Sofia Profile"
                          width={210}
                          height={60}
                     />
                  </div>

                  {/* Floating decorations */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center animate-float">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FFD700">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -left-4 w-10 h-10 bg-pink-200 rounded-full animate-pulse-soft"></div>
                </div>

                <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">Sofía Gasca</h3>
                <p className="text-center text-pink-500 font-semibold mb-4">Terapeuta Infantil Especializada</p>

                {/* Credentials */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-purple-50 p-3 rounded-xl">
                    <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Licenciada en Educación</p>
                      <p className="text-xs text-gray-500">Universidad de La Salle Bajío</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-pink-50 p-3 rounded-xl">
                    <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Santiago de Querétaro, Querétaro</p>
                      <p className="text-xs text-gray-500">Atención presencial</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -right-6 w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-1">
            <span className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Sobre Mí
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Comprometida con el{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                desarrollo de cada niño
              </span>
            </h2>

            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                ¡Hola! Soy <strong className="text-pink-500">Sofía Gasca</strong>, Licenciada en Educación
                por la Universidad de La Salle Bajío en León, Guanajuato.
              </p>

              <p>
                Mi pasión por ayudar a niños con necesidades especiales me ha llevado a especializarme
                en terapias para niños con <strong>síndrome de Down, autismo</strong> y otras
                condiciones que requieren atención especializada.
              </p>

              <p>
                Cada niño es único y especial. Mi enfoque se basa en crear un ambiente seguro,
                amoroso y estimulante donde cada pequeño pueda desarrollar todo su potencial
                a su propio ritmo.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500">+200</div>
                <div className="text-sm text-gray-500">Niños Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500">+5</div>
                <div className="text-sm text-gray-500">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">100%</div>
                <div className="text-sm text-gray-500">Dedicación</div>
              </div>
            </div>

            {/* Values */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['Paciencia', 'Amor', 'Dedicación', 'Profesionalismo', 'Empatía'].map((value, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-100"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
