"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Desarrollador Front-End",
      company: "Absti",
      period: "2023 - Presente",
      location: "Argentina",
      description:
        "Desarrollo de aplicaciones web modernas y back offices para clientes nacionales e internacionales. Actualmente trabajando en el desarrollo de un back office para Investor, empresa de negocios de Estados Unidos.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
      highlights: [
        "Colaboración en equipo internacional (Argentina-México)",
        "Desarrollo de interfaces complejas para gestión de datos",
        "Implementación de animaciones y micro-interacciones",
      ],
    },
    {
      title: "Proyectos Freelance",
      company: "Independiente",
      period: "2022 - 2023",
      location: "Remoto",
      description:
        "Desarrollo de aplicaciones web personalizadas, incluyendo una aplicación de películas y un sitio web para refugio de gatos.",
      technologies: ["React", "JavaScript", "CSS3", "API Integration"],
      highlights: [
        "App de películas con integración de APIs",
        "Sitio web responsive para refugio de animales",
        "Optimización de rendimiento y SEO",
      ],
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center py-32 px-4 animate-section">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mi <span className="text-blue-400">Experiencia</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mi trayectoria profesional desarrollando soluciones web innovadoras.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 scale-on-scroll">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-xl text-blue-400 font-semibold mb-4">{exp.company}</p>
                  </div>
                  <div className="flex flex-col lg:items-end space-y-2">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Logros destacados:</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Tecnologías utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-blue-600/20 text-blue-300 border-blue-600/30"
                      >
                        {tech}
                      </Badge>
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
