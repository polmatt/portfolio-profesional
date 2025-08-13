"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Mail, ArrowDown, Github, MessageCircle } from "lucide-react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Animación más dinámica para el hero
      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotationX: -15,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out",
        },
      )
        .fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            x: -50,
            skewX: 10,
          },
          {
            opacity: 1,
            x: 0,
            skewX: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8",
        )
        .fromTo(
          buttonsRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.5",
        )

      gsap.to(".scroll-indicator", {
        y: 15,
        rotation: 5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })

      gsap.to(".bg-particle", {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-5, 5)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image with subtle overlay effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/pablo-hero.jpg')",
            filter: "blur(1px) brightness(0.15) contrast(0.7)",
            transform: "scale(1.05)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-900/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/60" />
      </div>

      {/* Partículas de fondo animadas */}
      <div className="absolute inset-0 z-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-particle absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-5 bg-[url('/grid.svg')] opacity-5"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hola, soy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Pablo Cortés
          </span>
        </h1>

        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Desarrollador Front-End especializado en crear experiencias web modernas y funcionales. Actualmente trabajando
          en <span className="text-orange-400 font-semibold">ABS</span><span className="text-gray-400 font-semibold">TI</span> desarrollando soluciones innovadoras.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 hover:scale-105 transition-transform"
            asChild
          >
            <a 
                  href="https://wa.me/5491157533822?text=Hola%20Pablo!%20Vi%20tu%20portfolio%20y%20me%20gustaria%20hablar%20sobre%20un%20proyecto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-6 w-6 text-gray-300 group-hover:text-white" />
                  Contactar
                </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 hover:scale-105 transition-transform"
            asChild
          >
            <a href="https://github.com/polmatt" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Ver Proyectos
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-16">
          <a 
            href="http://www.linkedin.com/in/pablo-cortes-dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://www.instagram.com/pabloo.cortes/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-125"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  )
}
