import { useState, useEffect } from 'react'
import './App.css'
import Hero from './sections/hero/Hero'
import Trending from './sections/trending/Trending'
import Viewed from './sections/viewed/Viewed'
import Categories from './sections/categories/Categories'
import Footer from './components/footer/Footer'
import Animes from './pages/animes/Animes'

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#animes' ? 'animes' : 'home'
  })

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash === '#animes' ? 'animes' : 'home')
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (currentPage === 'animes') {
    return <Animes />
  }

  return (
    <>
      <Hero />
      <Trending />
      <Viewed />
      <Categories />
      <Footer />
    </>
  )
}

export default App
