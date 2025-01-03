import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

