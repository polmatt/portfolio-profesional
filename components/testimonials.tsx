"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Fabrizzio Cuevas",
      role: "Full Stack Developer",
      content:
        "Pablo es un desarrollador excepcional. Su atención al detalle y capacidad para resolver problemas complejos lo convierten en un activo valioso para cualquier equipo. Hasta no terminar su idea no para.",
      rating: 5,
    },
    {
      name: "Sergie Code",
      role: "Tech Lead en Investor & Valmex",
      content:
        "Trabajar con Pablo en el proyecto de Investor ha sido una experiencia fantástica. Su comunicación con el equipo internacional es excelente y siempre entrega código de alta calidad en tiempo y forma.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "UX/UI Designer",
      content:
        "Pablo tiene una gran habilidad para traducir diseños complejos en código funcional. Su comprensión de las mejores prácticas de UX y su implementación técnica son sobresalientes.",
      rating: 5,
    },
    {
      name: "Facundo Saldaña",
      role: "Full Stack Developer",
      content:
        "Es un placer hacer code review con Pablo. Su código es limpio, bien documentado y sigue las mejores prácticas. Además, siempre está dispuesto a ayudar y compartir conocimiento con el equipo.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 animate-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que dicen mis <span className="text-blue-400">Colegas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Testimonios de compañeros de trabajo y colaboradores sobre mi desempeño profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 scale-on-scroll">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Quote className="h-8 w-8 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 leading-relaxed italic">"{testimonial.content}"</p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>

                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
