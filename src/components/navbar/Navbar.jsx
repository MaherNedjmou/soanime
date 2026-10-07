import { useState, useEffect } from "react"
import "./Navbar.css"
import logo from "../../assets/soanime_logo.png"
import { IoMenu } from "react-icons/io5"
import { Link } from "react-router"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <img className="navbar-logo" src={logo} alt="Logo" />
      </Link>
      <IoMenu onClick={() => setMenuOpen(!menuOpen)} className="navbar-menu" />

      {menuOpen && (
        <ul className="navbar-links-mobile">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <li>Home</li>
          </Link>
          <Link to="/animes" onClick={() => setMenuOpen(false)}>
            <li>Anime List</li>
          </Link>
          <li>SIGN IN</li>
        </ul>
      )}

      <ul className="navbar-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/animes">
          <li>Anime List</li>
        </Link>
        <li className="navbar-signin">SIGN IN</li>
      </ul>
    </nav>
  )
}

export default Navbar