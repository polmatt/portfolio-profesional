"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Animación para About - Slide desde la izquierda con rotación
      gsap.fromTo(
        "#about",
        {
          opacity: 0,
          x: -100,
          rotationY: -15,
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )

      // Animación para Skills - Slide desde abajo con bounce (SIN PIN)
      gsap.fromTo(
        "#skills",
        {
          opacity: 0,
          y: 150,
          scale: 0.9,
          rotationX: 15,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.5,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: "#skills",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      )

      // Animación para Experience - Fade con rotación y escala
      gsap.fromTo(
        "#experience",
        {
          opacity: 0,
          scale: 0.8,
          rotation: -5,
          x: 50,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          x: 0,
          duration: 1.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#experience",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      )

      // Animación para Projects - Slide desde la derecha con skew
      gsap.fromTo(
        "#projects",
        {
          opacity: 0,
          x: 200,
          skewX: 10,
        },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )

      // Animación para Testimonials - Efecto de "flip" desde arriba
      gsap.fromTo(
        "#testimonials",
        {
          opacity: 0,
          rotationX: -45,
          y: -50,
          transformOrigin: "center bottom",
        },
        {
          opacity: 1,
          rotationX: 0,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#testimonials",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )

      // Animación para Contact - Slide desde abajo con elastic
      gsap.fromTo(
        "#contact",
        {
          opacity: 0,
          y: 100,
          scale: 0.95,
          rotationZ: 2,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationZ: 0,
          duration: 1.6,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: "#contact",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      )

      // Animaciones para cards individuales con efectos variados
      gsap.utils.toArray(".scale-on-scroll").forEach((element: any, index) => {
        const animations = [
          // Efecto de escala con rotación
          {
            from: { scale: 0.7, rotation: -8, opacity: 0, y: 30 },
            to: { scale: 1, rotation: 0, opacity: 1, y: 0 },
            ease: "back.out(1.4)",
          },
          // Efecto de slide lateral con skew
          {
            from: { x: index % 2 === 0 ? -60 : 60, opacity: 0, skewY: 3, scale: 0.9 },
            to: { x: 0, opacity: 1, skewY: 0, scale: 1 },
            ease: "power2.out",
          },
          // Efecto de flip con bounce
          {
            from: { rotationY: 90, opacity: 0, scale: 0.8 },
            to: { rotationY: 0, opacity: 1, scale: 1 },
            ease: "bounce.out",
          },
          // Efecto de slide desde abajo con rotación
          {
            from: { y: 50, rotation: 5, opacity: 0, scale: 0.9 },
            to: { y: 0, rotation: 0, opacity: 1, scale: 1 },
            ease: "power3.out",
          },
        ]

        const selectedAnimation = animations[index % animations.length]

        gsap.fromTo(element, selectedAnimation.from, {
          ...selectedAnimation.to,
          duration: 0.8 + Math.random() * 0.4,
          ease: selectedAnimation.ease,
          delay: (index % 4) * 0.15,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      })

      // Efecto parallax suave para elementos específicos
      gsap.utils.toArray(".parallax-element").forEach((element: any) => {
        gsap.to(element, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        })
      })

      // Animación de texto con efecto stagger
      gsap.utils.toArray(".stagger-text").forEach((element: any) => {
        const chars = element.textContent.split("")
        element.innerHTML = chars.map((char: string) => `<span>${char === " " ? "&nbsp;" : char}</span>`).join("")

        gsap.fromTo(
          element.children,
          {
            opacity: 0,
            y: 20,
            rotationX: -90,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.05,
            stagger: 0.02,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      })

      // Animación de badges con delay escalonado
      gsap.utils.toArray(".animate-badge").forEach((element: any, index) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            scale: 0,
            rotation: 180,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(2)",
            delay: index * 0.05,
            scrollTrigger: {
              trigger: element.closest(".scale-on-scroll"),
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  )
}
