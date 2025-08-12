"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Target } from "lucide-react"

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-32 px-4 animate-section">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-blue-400">Mí</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Desarrollador apasionado por crear soluciones web innovadoras y experiencias de usuario excepcionales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-800/50 border-slate-700 scale-on-scroll">
            <CardContent className="p-6 text-center">
              <GraduationCap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Educación</h3>
              <div className="text-gray-300 space-y-2">
                <p className="font-medium">Universidad Nacional de La Matanza</p>
                <p className="text-sm">Carrera de Sistemas</p>
                <div className="mt-4 space-y-1">
                  <p className="text-sm">Formación complementaria:</p>
                  <p className="text-xs text-blue-400">Udemy • Platzi • Educación IT</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 scale-on-scroll">
            <CardContent className="p-6 text-center">
              <Briefcase className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Experiencia</h3>
              <div className="text-gray-300 space-y-2">
                <p className="font-medium">Desarrollador Front-End</p>
                <p className="text-sm text-blue-400">Absti</p>
                <div className="mt-4">
                  <p className="text-sm">Proyecto actual:</p>
                  <p className="text-xs">Back Office para Investor (USA)</p>
                  <p className="text-xs text-gray-400">Equipo internacional: Front (ARG) + Back (MEX)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 scale-on-scroll">
            <CardContent className="p-6 text-center">
              <Target className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Objetivos</h3>
              <div className="text-gray-300 space-y-2">
                <p className="text-sm">• Especializarme en tecnologías emergentes</p>
                <p className="text-sm">• Liderar proyectos de gran escala</p>
                <p className="text-sm">• Contribuir a la comunidad open source</p>
                <p className="text-sm">• Mentorar a nuevos desarrolladores</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
