"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  features: string[]
  isPrivate?: boolean
  status?: string
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "App de Películas",
      description:
        "Aplicación web para explorar películas con integración de APIs externas. Incluye búsqueda, filtros, detalles de películas y sistema de favoritos.",
      image: "https://i.imgur.com/8ejsKvG.png",
      technologies: ["Angular", "TypeScript", "CSS3", "API Integration", "Responsive Design"],
      liveUrl: "https://app-peliculas-polmatts-projects.vercel.app/home",
      githubUrl: "#",
      features: [
        "Integración con API de películas",
        "Sistema de búsqueda y filtros",
        "Diseño responsive",
        "Gestión de favoritos",
        "Reseñas y calificaciones",
      ],
    },
    {
      title: "Oeste Gatitos",
      description:
        "Sitio web para refugio de gatos con información sobre adopciones, cuidados y castraciones. Diseño amigable y optimizado para dispositivos móviles.",
      image: "https://i.imgur.com/wEOyhvG.png",
      technologies: ["React", "Next js", "Responsive Design", "SEO Optimization"],
      liveUrl: "https://oeste-gatitos.vercel.app/",
      githubUrl: "#",
      features: [
        "Galería de gatos rescatados",
        "Información de cuidados",
        "Formulario de contacto",
        "Optimización SEO",
      ],
    },
    {
      title: "Investor Trust",
      description:
        "Sistema de gestión empresarial para Investor (USA). Desarrollo de interfaces complejas para manejo de datos financieros y reportes en tiempo real.",
      image: "https://i.imgur.com/i7sEgMM.png",
      technologies: ["Angular", "C#", "TypeScript", "Tailwind CSS", "Ignite"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Dashboard de métricas en tiempo real",
        "Gestión de usuarios y permisos",
        "Reportes financieros interactivos",
        "Colaboración internacional",
      ],
      isPrivate: true,
    },
    {
      title: "AZNET Allianz",
      description:
        "Sistema de gestión para Allianz (Argentina). Desarrollo de un back office para manejo de datos de clientes, productores y pólizas de seguros.",
      image: "https://i.imgur.com/a7Ze6IQ.png",
      technologies: ["Angular", "Java", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Diseño de interfaces intuitivas",
        "Gestión de usuarios y permisos",
        "Consulta de pólizas y clientes",
        "Reportes personalizados",
        "Reclamos y denuncias de siniestros",
      ],
      isPrivate: true,
    },
    {
      title: "Sistema de Asistencia",
      description:
        "Aplicación móvil para gestión de asistencia y presentes de empleados. Sistema en desarrollo con Flutter que incluye registro de ubicación, horarios y reportes en tiempo real.",
      image: "https://i.imgur.com/brJRzs1.png",
      technologies: ["Flutter", "Dart", "Mobile Development", "Android", "IOS"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Registro de asistencia con geolocalización",
        "Control de horarios de entrada y salida",
        "Reportes de presentes en tiempo real",
        "Interfaz intuitiva y responsive",
        "Notificaciones push",
        "Dashboard administrativo"
      ],
      isPrivate: true,
      status: "En Desarrollo",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30 animate-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mis <span className="text-blue-400">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo web.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 overflow-hidden scale-on-scroll">
              <div className="relative h-48 bg-slate-700">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                {project.isPrivate && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-600 text-white">Proyecto Privado</Badge>
                  </div>
                )}
                {project.status && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">{project.status}</Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Características principales:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-slate-700 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {!project.isPrivate && (
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Proyecto
                      </a>
                    </Button>
                  )}
                  {!project.isPrivate && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
