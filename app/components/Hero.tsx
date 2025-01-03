'use client'

import { useAppContext } from '../contexts/AppContext'
import { Button } from "@/components/ui/button"

const translations = {
  es: {
    title: 'Desarrollo Web y SEO Profesional',
    subtitle: 'Potenciamos tu presencia online con sitios web personalizados y optimización para motores de búsqueda',
    cta: 'Contáctanos',
  },
  en: {
    title: 'Professional Web Development and SEO',
    subtitle: 'We boost your online presence with custom websites and search engine optimization',
    cta: 'Contact Us',
  },
  pt: {
    title: 'Desenvolvimento Web e SEO Profissional',
    subtitle: 'Impulsionamos sua presença online com sites personalizados e otimização para motores de busca',
    cta: 'Contate-nos',
  }
}

export default function Hero() {
  const { language } = useAppContext()

  return (
    <section className="bg-primary text-primary-foreground dark:bg-gray-900 dark:text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{translations[language].title}</h1>
        <p className="text-xl mb-8">{translations[language].subtitle}</p>
        <Button as="a" href="#contacto">
          {translations[language].cta}
        </Button>
      </div>
    </section>
  )
}
