import '../globals.css'; // Importar los estilos globales
import { Inter } from 'next/font/google'
import { AppProvider } from './contexts/AppContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WebSEO Pro - Desarrollo Web y SEO',
  description: 'Servicios profesionales de desarrollo web y optimización SEO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}

