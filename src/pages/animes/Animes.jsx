import { useState, useMemo } from "react"
import "./Animes.css"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import CardAnime from "../../components/cardAnime/CardAnime"

const ALL_GENRES = [
  "All",
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mecha",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
]

const animeData = [
  { id: 1,  image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",  title: "Hunter x Hunter",     genre: "Action",    rate: "9.5", year: 2011 },
  { id: 2,  image: "https://cdn.myanimelist.net/images/anime/5/73199l.jpg",     title: "Attack on Titan",     genre: "Action",    rate: "9.0", year: 2013 },
  { id: 3,  image: "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg", title: "Fullmetal Alchemist", genre: "Adventure", rate: "9.1", year: 2009 },
  { id: 4,  image: "https://cdn.myanimelist.net/images/anime/13/17405l.jpg",    title: "Naruto Shippuden",    genre: "Action",    rate: "8.7", year: 2007 },
  { id: 5,  image: "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg",  title: "One Piece",           genre: "Adventure", rate: "9.0", year: 1999 },
  { id: 6,  image: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",  title: "Demon Slayer",        genre: "Action",    rate: "8.7", year: 2019 },
  { id: 7,  image: "https://cdn.myanimelist.net/images/anime/1341/99720l.jpg",  title: "My Hero Academia",    genre: "Action",    rate: "8.0", year: 2016 },
  { id: 8,  image: "https://cdn.myanimelist.net/images/anime/1223/96541l.jpg",  title: "Sword Art Online",    genre: "Fantasy",   rate: "7.2", year: 2012 },
  { id: 9,  image: "https://cdn.myanimelist.net/images/anime/1517/100633l.jpg", title: "Death Note",          genre: "Thriller",  rate: "9.0", year: 2006 },
  { id: 10, image: "https://cdn.myanimelist.net/images/anime/1887/117644l.jpg", title: "Violet Evergarden",   genre: "Drama",     rate: "8.7", year: 2018 },
  { id: 11, image: "https://cdn.myanimelist.net/images/anime/1935/127974l.jpg", title: "Spy x Family",        genre: "Comedy",    rate: "8.5", year: 2022 },
  { id: 12, image: "https://cdn.myanimelist.net/images/anime/1500/103005l.jpg", title: "Re:Zero",             genre: "Fantasy",   rate: "8.3", year: 2016 },
  { id: 13, image: "https://cdn.myanimelist.net/images/anime/1075/130480l.jpg", title: "Jujutsu Kaisen",      genre: "Action",    rate: "8.6", year: 2020 },
  { id: 14, image: "https://cdn.myanimelist.net/images/anime/7/20185l.jpg",     title: "Bleach",              genre: "Action",    rate: "8.0", year: 2004 },
  { id: 15, image: "https://cdn.myanimelist.net/images/anime/4/50361l.jpg",     title: "Cowboy Bebop",        genre: "Sci-Fi",    rate: "9.0", year: 1998 },
  { id: 16, image: "https://cdn.myanimelist.net/images/anime/1962/143103l.jpg", title: "Chainsaw Man",        genre: "Action",    rate: "8.5", year: 2022 },
  { id: 17, image: "https://cdn.myanimelist.net/images/anime/1314/108941l.jpg", title: "Toradora",            genre: "Romance",   rate: "8.1", year: 2008 },
  { id: 18, image: "https://cdn.myanimelist.net/images/anime/1935/127974l.jpg", title: "Haikyuu!!",           genre: "Sports",    rate: "8.7", year: 2014 },
  { id: 19, image: "https://cdn.myanimelist.net/images/anime/1791/138057l.jpg", title: "Solo Leveling",       genre: "Action",    rate: "8.4", year: 2024 },
  { id: 20, image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",  title: "Tokyo Ghoul",         genre: "Horror",    rate: "7.8", year: 2014 },
]

const Animes = () => {
  const [search, setSearch] = useState("")
  const [activeGenre, setActiveGenre] = useState("All")

  const filtered = useMemo(() => {
    return animeData.filter((anime) => {
      const matchesGenre = activeGenre === "All" || anime.genre === activeGenre
      const matchesSearch = anime.title.toLowerCase().includes(search.toLowerCase())
      return matchesGenre && matchesSearch
    })
  }, [search, activeGenre])

  return (
    <div className="animes-page">
      <Navbar />

      {/* Page Header */}
      <div className="animes-hero">
        <div className="animes-hero-content">
          <p className="animes-hero-tag">Discover</p>
          <h1>
            Browse <span>Anime</span> List
          </h1>
          <p className="animes-hero-sub">
            Explore hundreds of anime titles
          </p>

          {/* Search Bar */}
          <div className="animes-search-bar">
            <input
              id="anime-search-input"
              type="text"
              placeholder="Search for anime..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button id="anime-search-btn">SEARCH</button>
          </div>
        </div>
      </div>

      {/* Genre Filter */}
      <section className="animes-filter-section">
        <div className="animes-filter-header">
          <p className="animes-filter-tag">Filter</p>
          <h2 className="animes-filter-title">Browse by Genre</h2>
        </div>
        <div className="animes-genre-pills">
          {ALL_GENRES.map((genre) => (
            <button
              key={genre}
              id={`genre-pill-${genre.toLowerCase().replace(/\s+/g, "-")}`}
              className={`animes-genre-pill ${activeGenre === genre ? "active" : ""}`}
              onClick={() => setActiveGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="animes-results-section">
        <div className="animes-results-header">
          <p className="animes-results-count">
            Showing <span>{filtered.length}</span> result{filtered.length !== 1 ? "s" : ""}
            {activeGenre !== "All" ? ` in "${activeGenre}"` : ""}
            {search ? ` for "${search}"` : ""}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="animes-empty">
            <p className="animes-empty-icon">🎌</p>
            <h3>No anime found</h3>
            <p>Try adjusting your search or filter.</p>
          </div>
        ) : (
          <div className="animes-grid">
            {filtered.map((anime) => (
              <CardAnime
                key={anime.id}
                image={anime.image}
                title={anime.title}
                genre={anime.genre}
                rate={anime.rate}
                year={anime.year}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}

export default Animes
