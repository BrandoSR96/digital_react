'use client'

import { useAppContext } from '../contexts/AppContext'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const translations = {
  es: {
    title: 'Nuestro Portafolio',
    projects: [
      {
        title: 'E-commerce de Moda',
        description: 'Desarrollo de una tienda online completa con integración de pagos y gestión de inventario.',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        title: 'Blog de Viajes',
        description: 'Diseño y desarrollo de un blog responsive con optimización SEO para aumentar el tráfico orgánico.',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        title: 'Aplicación Web de Gestión',
        description: 'Creación de una aplicación web para la gestión de proyectos y tareas con autenticación de usuarios.',
        image: '/placeholder.svg?height=200&width=300',
      },
    ],
  },
  en: {
    title: 'Our Portfolio',
    projects: [
      {
        title: 'Fashion E-commerce',
        description: 'Development of a complete online store with payment integration and inventory management.',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        title: 'Travel Blog',
        description: 'Design and development of a responsive blog with SEO optimization to increase organic traffic.',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        title: 'Management Web Application',
        description: 'Creation of a web application for project and task management with user authentication.',
        image: '/placeholder.svg?height=200&width=300',
      },
    ],
  },
  pt: {
    title: 'Nosso Portfólio',
    projects: [
      {
        title: 'E-commerce de Moda',
        description: 'Desenvolvimento de uma loja online completa com integração de pagamentos e gerenciamento de estoque.',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        title: 'Blog de Viagens',
        description: 'Design e desenvolvimento de um blog responsivo com otimização SEO para aumentar o tráfego orgânico.',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        title: 'Aplicativo Web de Gestão',
        description: 'Criação de um aplicativo web para gerenciamento de projetos e tarefas com autenticação de usuários.',
        image: '/placeholder.svg?height=200&width=300',
      },
    ],
  },
}

export default function Portfolio() {
  const { language } = useAppContext()

  return (
    <section id="portfolio" className="py-20 bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">{translations[language].title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {translations[language].projects.map((project, index) => (
            <Card key={index} className="dark:bg-gray-800">
              <CardHeader>
                <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 dark:text-white">{project.title}</CardTitle>
                <CardDescription className="dark:text-gray-300">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

