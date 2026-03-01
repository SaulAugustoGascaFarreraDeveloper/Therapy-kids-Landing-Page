'use client';

const services = [
  {
    title: 'Síndrome de Down',
    description: 'Terapia especializada para estimular el desarrollo cognitivo, motor y del lenguaje en niños con síndrome de Down.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" fill="#FFE5EC"/>
        <path d="M16 20C16 20 18 24 24 24C30 24 32 20 32 20" stroke="#F5A5B8" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="2" fill="#333"/>
        <circle cx="30" cy="18" r="2" fill="#333"/>
        <path d="M24 28L24 32" stroke="#F5A5B8" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 34C20 34 22 36 24 36C26 36 28 34 28 34" stroke="#F5A5B8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: 'from-pink-100 to-pink-200',
    borderColor: 'border-pink-300',
  },
  {
    title: 'Trastorno del Espectro Autista',
    description: 'Intervención temprana y terapia conductual adaptada para niños con autismo, enfocada en comunicación y habilidades sociales.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="8" fill="#E8D5F0"/>
        <circle cx="16" cy="20" r="4" fill="#C9B8D9"/>
        <circle cx="32" cy="20" r="4" fill="#C9B8D9"/>
        <path d="M16 32H32" stroke="#9575CD" strokeWidth="3" strokeLinecap="round"/>
        <path d="M24 12V8" stroke="#9575CD" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 14L16 10" stroke="#9575CD" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 14L32 10" stroke="#9575CD" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: 'from-purple-100 to-purple-200',
    borderColor: 'border-purple-300',
  },
  {
    title: 'Estimulación Temprana',
    description: 'Programas de estimulación para potenciar el desarrollo integral en los primeros años de vida.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" fill="#D4F1F4"/>
        <path d="M24 14L26 20H32L27 24L29 30L24 26L19 30L21 24L16 20H22L24 14Z" fill="#7DD3C0"/>
        <circle cx="24" cy="24" r="6" fill="#B2E5D8"/>
      </svg>
    ),
    color: 'from-teal-100 to-teal-200',
    borderColor: 'border-teal-300',
  },
  {
    title: 'Terapia de Lenguaje',
    description: 'Desarrollo de habilidades comunicativas y del habla para niños con dificultades en el lenguaje.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M8 24C8 14.059 16.059 6 26 6C35.941 6 44 14.059 44 24C44 33.941 35.941 42 26 42C23.5 42 21.1 41.5 18.9 40.6L8 44L11.4 33.1C9.5 30.4 8 27.4 8 24Z" fill="#FFF3E0"/>
        <circle cx="20" cy="24" r="3" fill="#FFE082"/>
        <circle cx="32" cy="24" r="3" fill="#FFE082"/>
        <path d="M22 30C22 30 24 32 26 32C28 32 30 30 30 30" stroke="#FFA726" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: 'from-yellow-100 to-orange-100',
    borderColor: 'border-yellow-300',
  },
  {
    title: 'Desarrollo Psicomotor',
    description: 'Actividades diseñadas para mejorar la coordinación, equilibrio y habilidades motoras finas y gruesas.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="12" r="6" fill="#BBDEFB"/>
        <path d="M24 18V28" stroke="#90CAF9" strokeWidth="3" strokeLinecap="round"/>
        <path d="M24 28L16 40" stroke="#90CAF9" strokeWidth="3" strokeLinecap="round"/>
        <path d="M24 28L32 40" stroke="#90CAF9" strokeWidth="3" strokeLinecap="round"/>
        <path d="M18 22L12 28" stroke="#90CAF9" strokeWidth="3" strokeLinecap="round"/>
        <path d="M30 22L36 28" stroke="#90CAF9" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    color: 'from-blue-100 to-blue-200',
    borderColor: 'border-blue-300',
  },
  {
    title: 'Apoyo Educativo',
    description: 'Acompañamiento escolar personalizado para reforzar el aprendizaje y la inclusión educativa.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="12" width="32" height="28" rx="2" fill="#E8F5E9"/>
        <path d="M8 18H40" stroke="#81C784" strokeWidth="2"/>
        <circle cx="14" cy="15" r="2" fill="#EF5350"/>
        <circle cx="20" cy="15" r="2" fill="#FFC107"/>
        <circle cx="26" cy="15" r="2" fill="#4CAF50"/>
        <path d="M16 26H32" stroke="#81C784" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 32H28" stroke="#81C784" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: 'from-green-100 to-green-200',
    borderColor: 'border-green-300',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Terapia Especializada con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Amor
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos atención personalizada para cada niño, adaptando nuestras técnicas
            y metodologías a sus necesidades específicas para lograr su máximo desarrollo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card-hover rainbow-border bg-gradient-to-br ${service.color} p-6 rounded-2xl border-2 ${service.borderColor} shadow-md`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            ¿No encuentras el servicio que necesitas? Contáctanos para una evaluación personalizada.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Consultar Más Servicios
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
