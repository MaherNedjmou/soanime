import { useState, useEffect } from "react"
import "./Navbar.css"
import logo from "../../assets/soanime_logo.png"
import { IoMenu } from "react-icons/io5";

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

  const navigateTo = (hash) => {
    window.location.hash = hash
    setMenuOpen(false)
  }

  return (
    <nav className={scrolled ? "scrolled" : ""}>
        <img
          className="navbar-logo"
          src={logo}
          alt="Logo"
          onClick={() => navigateTo("")}
          style={{ cursor: "pointer" }}
        />
        <IoMenu onClick={() => setMenuOpen(!menuOpen)} className="navbar-menu" />

        {menuOpen && 
          <ul className="navbar-links-mobile">
            <li onClick={() => navigateTo("")}>Home</li>
            <li onClick={() => navigateTo("animes")}>Anime List</li>
            <li>SIGN IN</li>
          </ul>
        }
        
        <ul className="navbar-links">
            <li onClick={() => navigateTo("")}>Home</li>
            <li onClick={() => navigateTo("animes")}>Anime List</li>
            <li className="navbar-signin">SIGN IN</li>
        </ul>
    </nav>
  )
}

export default Navbar