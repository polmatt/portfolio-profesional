"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    name: "React",
    level: 90,
    icon: "⚛️",
    color: "from-blue-400 to-blue-600",
    category: "Frontend"
  },
  {
    name: "TypeScript",
    level: 88,
    icon: "📘",
    color: "from-blue-500 to-blue-700",
    category: "Frontend"
  },
  {
    name: "Next.js",
    level: 85,
    icon: "▲",
    color: "from-gray-600 to-gray-800",
    category: "Frontend"
  },
  {
    name: "Angular",
    level: 82,
    icon: "🅰️",
    color: "from-red-500 to-red-700",
    category: "Frontend"
  },
  {
    name: "JavaScript",
    level: 92,
    icon: "🟡",
    color: "from-yellow-400 to-yellow-600",
    category: "Frontend"
  },
  {
    name: "Tailwind CSS",
    level: 87,
    icon: "🎨",
    color: "from-cyan-400 to-cyan-600",
    category: "Frontend"
  },
  {
    name: "Dart",
    level: 73,
    icon: "🎯",
    color: "from-blue-500 to-cyan-500",
    category: "Mobile"
  },
  {
    name: "Git",
    level: 85,
    icon: "🌿",
    color: "from-orange-400 to-orange-600",
    category: "Tools"
  },
  {
    name: "Figma",
    level: 75,
    icon: "🖌️",
    color: "from-pink-400 to-pink-600",
    category: "Design"
  },
  {
    name: "Node.js",
    level: 80,
    icon: "🟢",
    color: "from-green-400 to-green-600",
    category: "Backend"
  },
  {
    name: "Flutter",
    level: 75,
    icon: "🦋",
    color: "from-sky-400 to-blue-500",
    category: "Mobile"
  }
]

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animación del título
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      )

      // Animación de las skills cards con efecto stagger
      gsap.fromTo(
        ".skill-card",
        { 
          opacity: 0, 
          y: 80,
          scale: 0.8,
          rotationY: 45
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      )

      // Animación de las barras de progreso
      gsap.fromTo(
        ".progress-bar",
        { width: "0%" },
        {
          width: (i: number, target: any) => target.getAttribute('data-level') + '%',
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 70%",
            end: "bottom 30%",
          }
        }
      )

      // Animación de los números de porcentaje
      gsap.fromTo(
        ".skill-percentage",
        { innerText: 0 },
        {
          innerText: (i: number, target: any) => target.getAttribute('data-level'),
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.15,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 70%",
            end: "bottom 30%",
          }
        }
      )

      // Hover animations para las cards
      document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            rotationY: 5,
            z: 50,
            duration: 0.3,
            ease: "power2.out"
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="min-h-screen flex items-center py-32 px-4 bg-slate-900/50 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold text-white mb-6">
            Mis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Habilidades
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear experiencias web excepcionales y funcionales.
          </p>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="skill-card bg-slate-800/60 border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                {/* Skill icon and name */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`text-3xl filter group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-gray-400">{skill.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span 
                      className="skill-percentage text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                      data-level={skill.level}
                    >
                      0
                    </span>
                    <span className="text-sm text-gray-400">%</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative">
                  <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`progress-bar h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      data-level={skill.level}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300 rounded-full`}
                  ></div>
                </div>

                {/* Skill level indicator */}
                <div className="mt-3 flex justify-between text-xs text-gray-400">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional visual elements */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm">
            Siempre aprendiendo y mejorando mis habilidades técnicas
          </p>
        </div>
      </div>
    </section>
  )
}
