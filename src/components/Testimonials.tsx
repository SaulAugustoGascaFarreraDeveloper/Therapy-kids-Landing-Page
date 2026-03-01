'use client';

const testimonials = [
  {
    name: 'María García',
    role: 'Mamá de Diego (5 años)',
    content: 'Sofía ha sido una bendición para nuestra familia. Diego ha avanzado muchísimo en su desarrollo del lenguaje desde que comenzó las terapias. Su paciencia y dedicación son incomparables.',
    avatar: '👩',
    rating: 5,
  },
  {
    name: 'Roberto Hernández',
    role: 'Papá de Valentina (4 años)',
    content: 'El cambio en Valentina ha sido increíble. Sofía tiene una forma especial de conectar con los niños y hacer que cada sesión sea divertida y productiva. Muy agradecidos.',
    avatar: '👨',
    rating: 5,
  },
  {
    name: 'Ana López',
    role: 'Mamá de Santiago (6 años)',
    content: 'Buscamos muchas opciones antes de encontrar a Sofía. Su enfoque personalizado y el amor que le pone a su trabajo hacen toda la diferencia. Santiago espera con ansias cada sesión.',
    avatar: '👩',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Lo que dicen las{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              familias
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La satisfacción de las familias es nuestra mayor recompensa.
            Estas son algunas de las experiencias de quienes han confiado en nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-hover bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-pink-50 to-purple-50 px-8 py-6 rounded-2xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-500">4.9/5</div>
              <div className="text-sm text-gray-500">Calificación</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">+200</div>
              <div className="text-sm text-gray-500">Familias Felices</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">100%</div>
              <div className="text-sm text-gray-500">Recomendado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
