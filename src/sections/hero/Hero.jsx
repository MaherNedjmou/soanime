import './Hero.css'
import Navbar from '../../components/navbar/Navbar'
import Features from '../features/Features'

const Hero = () => {
  return (
    <section className='hero'>
      <Navbar />
      <div className='hero-content'>
        {/* left side */}
        <div className='hero-left'>
          <h2>WELCOME TO SOANIME</h2>
          <h1>BEST <span>ANIME</span> SITE EVER!</h1>
          <p>
            Discover your favorite anime series and movies, all in one place!
            With high quality and fast streaming.
            You can watch anytime and anywhere.
            No ads, no interruptions, just pure anime goodness.
          </p>
          <div className='search-bar'>
            <input type="text" placeholder="Search for anime..." />
            <button>SEARCH</button>
          </div>
        </div>
        {/* right side */}
        <div className='hero-right'>
          <img src="https://cdn.myanimelist.net/images/anime/10/47347.jpg" alt="Hero Image" />
        </div>
      </div>
      <Features />
    </section>
  )
}

export default Hero