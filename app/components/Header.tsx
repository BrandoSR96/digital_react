'use client'

import { useEffect } from 'react'
import { useAppContext } from '../contexts/AppContext'
import { Moon, Sun, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';


const translations = {
    es: {
        services: 'Servicios',
        contact: 'Contacto',
        portfolio: 'Portafolio',
    },
    en: {
        services: 'Services',
        contact: 'Contact',
        portfolio: 'Portfolio',
    },
    pt: {
        services: 'Serviços',
        contact: 'Contato',
        portfolio: 'Portfólio',
    }
}

export default function Header() {
    const { theme, toggleTheme, language, setLanguage } = useAppContext()

    useEffect(() => {
        const handleScroll = (e: Event) => {
            e.preventDefault()
            const target = e.target as HTMLAnchorElement
            const targetId = target.getAttribute('href')?.slice(1)
            if (targetId) {
                const targetElement = document.getElementById(targetId)
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' })
                }
            }
        }

        const links = document.querySelectorAll('a[href^="#"]')
        links.forEach(link => {
            link.addEventListener('click', handleScroll)
        })

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleScroll)
            })
        }
    }, [])

    return (
        <header className="bg-background shadow-md dark:bg-gray-800">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-primary dark:text-white">
                    WebSEO Pro
                </a>
                <nav>
                    <ul className="flex space-x-4 items-center">
                        <li><a href="#servicios" className="text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-white">{translations[language].services}</a></li>
                        <li><a href="#portfolio" className="text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-white">{translations[language].portfolio}</a></li>
                        <li><a href="#contacto" className="text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-white">{translations[language].contact}</a></li>
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Globe className="h-[1.2rem] w-[1.2rem] dark:text-white" />
                                        <span className="sr-only">Cambiar idioma</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        <Button variant="ghost" size="medium" onClick={() => setLanguage('es')}>
                                            Español
                                        </Button>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Button variant="ghost" size="medium" onClick={() => setLanguage('en')}>
                                            English
                                        </Button>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Button variant="ghost" size="medium" onClick={() => setLanguage('pt')}>
                                            Português
                                        </Button>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li>
                            <Button variant="ghost" size="icon" onClick={toggleTheme}>
                                {theme === 'light' ? (
                                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                                ) : (
                                    <Sun className="h-[1.2rem] w-[1.2rem] text-white" />
                                )}
                                <span className="sr-only">Cambiar tema</span>
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}