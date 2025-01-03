'use client'

import { useAppContext } from '../contexts/AppContext'

const translations = {
  es: {
    description: 'Potenciando tu presencia online con desarrollo web y SEO de calidad.',
    contact: 'Contáctanos',
    rights: 'Todos los derechos reservados.',
  },
  en: {
    description: 'Empowering your online presence with quality web development and SEO.',
    contact: 'Contact Us',
    rights: 'All rights reserved.',
  },
  pt: {
    description: 'Potencializando sua presença online com desenvolvimento web e SEO de qualidade.',
    contact: 'Contate-nos',
    rights: 'Todos os direitos reservados.',
  },
}

export default function Footer() {
  const { language } = useAppContext()

  return (
    <footer id="contacto" className="bg-muted text-muted-foreground dark:bg-gray-800 dark:text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 dark:text-white">WebSEO Pro</h3>
            <p>{translations[language].description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 dark:text-white">{translations[language].contact}</h3>
            <p>Email: info@webseopro.com</p>
            <p>Teléfono: +1 234 567 890</p>
            <p>Dirección: Calle Principal 123, Ciudad, País</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 WebSEO Pro. {translations[language].rights}</p>
        </div>
      </div>
    </footer>
  )
}

