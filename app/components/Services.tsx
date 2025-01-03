'use client'

import { useAppContext } from '../contexts/AppContext'
import { Code, Search, Smartphone, Globe } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const translations = {
  es: {
    title: 'Nuestros Servicios',
    services: [
      {
        icon: Code,
        title: 'Desarrollo Web',
        description: 'Creamos sitios web personalizados, diseñados para destacar tu negocio o marca personal con un enfoque profesional y funcional.',
      },
      {
        icon: Search,
        title: 'Optimización SEO',
        description: 'Mejoramos tu presencia en línea para asegurar que tu sitio sea fácilmente encontrado por los motores de búsqueda.',
      },
      {
        icon: Smartphone,
        title: 'Diseño Responsive',
        description: 'Desarrollamos sitios web que se adaptan perfectamente a todos los dispositivos, desde móviles hasta desktops.',
      },
      {
        icon: Globe,
        title: 'Marketing Digital',
        description: 'Implementamos estrategias de marketing digital para aumentar tu visibilidad online y atraer más clientes potenciales.',
      },
    ],
  },
  en: {
    title: 'Our Services',
    services: [
      {
        icon: Code,
        title: 'Web Development',
        description: 'We create custom websites designed to highlight your business or personal brand with a professional and functional approach.',
      },
      {
        icon: Search,
        title: 'SEO Optimization',
        description: 'We improve your online presence to ensure your site is easily found by search engines.',
      },
      {
        icon: Smartphone,
        title: 'Responsive Design',
        description: 'We develop websites that adapt perfectly to all devices, from mobile to desktop.',
      },
      {
        icon: Globe,
        title: 'Digital Marketing',
        description: 'We implement digital marketing strategies to increase your online visibility and attract more potential customers.',
      },
    ],
  },
  pt: {
    title: 'Nossos Serviços',
    services: [
      {
        icon: Code,
        title: 'Desenvolvimento Web',
        description: 'Criamos sites personalizados, projetados para destacar seu negócio ou marca pessoal com uma abordagem profissional e funcional.',
      },
      {
        icon: Search,
        title: 'Otimização SEO',
        description: 'Melhoramos sua presença online para garantir que seu site seja facilmente encontrado pelos motores de busca.',
      },
      {
        icon: Smartphone,
        title: 'Design Responsivo',
        description: 'Desenvolvemos sites que se adaptam perfeitamente a todos os dispositivos, de celulares a desktops.',
      },
      {
        icon: Globe,
        title: 'Marketing Digital',
        description: 'Implementamos estratégias de marketing digital para aumentar sua visibilidade online e atrair mais clientes potenciais.',
      },
    ],
  },
}

export default function Services() {
  const { language } = useAppContext()

  return (
    <section id="servicios" className="py-20 bg-muted dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">{translations[language].title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {translations[language].services.map((service, index) => (
            <Card key={index} className="dark:bg-gray-700">
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary dark:text-blue-400 mb-4" />
                <CardTitle className="dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="dark:text-gray-300">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

