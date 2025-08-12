"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí implementarías el envío del formulario
    console.log("Formulario enviado:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30 animate-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hablemos de tu <span className="text-blue-400">Proyecto</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ¿Tenés una idea? ¿Necesitas un desarrollador front-end? Estoy aquí para ayudarte a hacerla realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-4" />
                  <span className="text-gray-300">pablomcortes1990@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-4" />
                  <span className="text-gray-300">+54 11 5753-3822</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-400 mr-4" />
                  <span className="text-gray-300">Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Sígueme</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-colors">
                  <Github className="h-6 w-6 text-gray-300" />
                </a>
                <a href="#" className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-colors">
                  <Linkedin className="h-6 w-6 text-gray-300" />
                </a>
                <a href="#" className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-colors">
                  <Instagram className="h-6 w-6 text-gray-300" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">¿Por qué trabajar conmigo?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Experiencia en proyectos internacionales
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Código limpio y bien documentado
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Comunicación clara y constante
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Entrega en tiempo y forma
                </li>
              </ul>
            </div>
          </div>

          {/* Formulario de contacto */}
          <Card className="bg-slate-800/50 border-slate-700 scale-on-scroll">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 bg-slate-700 border-slate-600 text-white"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 bg-slate-700 border-slate-600 text-white"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 bg-slate-700 border-slate-600 text-white min-h-[120px]"
                    placeholder="Cuéntame sobre tu proyecto..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-gray-400">© 2025</p>
        </div>
      </div>
    </section>
  )
}
