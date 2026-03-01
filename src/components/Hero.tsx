'use client';

import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen gradient-bg pt-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-20 h-20 opacity-30">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="#F5A5B8" />
        </svg>
      </div>
      <div className="absolute top-40 right-20 w-16 h-16 opacity-40 animate-float">
        <svg viewBox="0 0 100 100">
          <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" fill="#C9B8D9" />
        </svg>
      </div>
      <div className="absolute bottom-40 left-20 w-24 h-24 opacity-30">
        <svg viewBox="0 0 100 100">
          <circle cx="30" cy="30" r="25" fill="#B8D4E3" />
          <circle cx="70" cy="30" r="25" fill="#B8D4E3" />
          <circle cx="30" cy="70" r="25" fill="#B8D4E3" />
          <circle cx="70" cy="70" r="25" fill="#B8D4E3" />
        </svg>
      </div>

      {/* Butterfly decoration */}
      <div className="absolute bottom-60 right-10 w-16 h-16 animate-float" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100">
          <ellipse cx="35" cy="40" rx="25" ry="30" fill="#3F51B5" />
          <ellipse cx="65" cy="40" rx="25" ry="30" fill="#3F51B5" />
          <ellipse cx="35" cy="65" rx="20" ry="25" fill="#3F51B5" />
          <ellipse cx="65" cy="65" rx="20" ry="25" fill="#3F51B5" />
          <rect x="48" y="30" width="4" height="50" fill="#FFE082" />
          <circle cx="50" cy="25" r="5" fill="#FFE082" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-6">
              <span className="bg-white/80 text-pink-500 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                Atención Integral Especializada Infantil
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
              Ayudando a cada niño a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400">
                brillar
              </span>{' '}
              con todo su potencial
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
              Terapia de Lenguaje Infantil y Acompañamiento profesional para el desarrollo 
              de la comunicación de tu hijo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contacto"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Agenda Valoración
              </a>
              <a
                href="#servicios"
                className="bg-white text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:bg-gray-50 transition-all inline-flex items-center justify-center gap-2 border-2 border-gray-200"
              >
                Conoce los Servicios
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Licenciada en Educación</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Universidad de La Salle Bajío</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Santiago de Querétaro, Querétaro</span>
              </div>
            </div>
          </div>

          {/* Right content - Illustration */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main card with rainbow */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                {/* Rainbow */}
                {/* <svg className="w-full h-40 mb-4" viewBox="0 0 200 80">
                  <path d="M20 70 Q100 10 180 70" stroke="#90CAF9" strokeWidth="12" fill="none" strokeLinecap="round" />
                  <path d="M35 70 Q100 20 165 70" stroke="#FFE082" strokeWidth="12" fill="none" strokeLinecap="round" />
                  <path d="M50 70 Q100 30 150 70" stroke="#F5A5B8" strokeWidth="12" fill="none" strokeLinecap="round" />
                </svg> */}

                <div className="flex items-center justify-center">
                    <Image 
                      src={'https://res.cloudinary.com/dxifyrkhq/image/upload/v1772224204/sofia_annoue.jpg'}
                      alt="Sofia Profile"
                      width={210}
                      height={60}
                    />
                </div>

                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Therapy Kids</h2>
                  <div className="h-2 w-full bg-gradient-to-r from-teal-300 to-teal-400 rounded-full mb-4"></div>
                  <p className="font-semibold text-gray-700">
                    <span className="block text-md md:text-xl">
                      Sofía Dominique Gasca
                    </span>

                    <span className="block text-md md:text-xl">
                      Farrera
                    </span>
                  </p>
                </div>

                {/* Decorative flowers and butterfly */}
                <div className="absolute -bottom-4 -right-4 w-27 h-27">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="30" r="15" fill="#FFB6C1" />
                    <circle cx="30" cy="50" r="15" fill="#FFB6C1" />
                    <circle cx="70" cy="50" r="15" fill="#FFB6C1" />
                    <circle cx="50" cy="70" r="15" fill="#FFB6C1" />
                    <circle cx="50" cy="50" r="10" fill="#FFE082" />
                    <path d="M50 70 Q50 90 50 95" stroke="#4CAF50" strokeWidth="4" fill="none" />
                    <ellipse cx="40" cy="85" rx="8" ry="15" fill="#4CAF50" transform="rotate(-30 40 85)" />
                    <ellipse cx="60" cy="85" rx="8" ry="15" fill="#4CAF50" transform="rotate(30 60 85)" />
                  </svg>
                </div>

                {/* Purple dots decoration */}
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                  <div className="flex flex-col gap-2">
                    <div className="w-4 h-4 rounded-full bg-purple-200"></div>
                    <div className="w-3 h-3 rounded-full bg-purple-300"></div>
                    <div className="w-4 h-4 rounded-full bg-purple-200"></div>
                    <div className="w-3 h-3 rounded-full bg-purple-300"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20">
                <svg viewBox="0 0 100 100" className="animate-float">
                  <circle cx="30" cy="30" r="20" fill="#E8D5F0" />
                  <circle cx="70" cy="30" r="20" fill="#E8D5F0" />
                  <circle cx="30" cy="70" r="20" fill="#E8D5F0" />
                  <circle cx="70" cy="70" r="20" fill="#E8D5F0" />
                  <circle cx="50" cy="50" r="15" fill="#F5A5B8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
