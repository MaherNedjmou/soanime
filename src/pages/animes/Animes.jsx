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

const ANIME_IMAGE = "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg"

const animeData = [
  { id: 1,  image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Action",        rate: "9.5" },
  { id: 2,  image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Adventure",     rate: "9.5" },
  { id: 3,  image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Comedy",        rate: "9.5" },
  { id: 4,  image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Drama",         rate: "9.5" },
  { id: 5,  image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Fantasy",       rate: "9.5" },
  { id: 6,  image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Horror",        rate: "9.5" },
  { id: 7,  image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Mecha",         rate: "9.5" },
  { id: 8,  image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Mystery",       rate: "9.5" },
  { id: 9,  image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Romance",       rate: "9.5" },
  { id: 10, image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Sci-Fi",        rate: "9.5" },
  { id: 11, image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Slice of Life", rate: "9.5" },
  { id: 12, image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Sports",        rate: "9.5" },
  { id: 13, image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Supernatural",  rate: "9.5" },
  { id: 14, image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Thriller",      rate: "9.5" },
  { id: 15, image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Action",        rate: "9.5" },
  { id: 16, image: ANIME_IMAGE, title: "Hunter X Hunter", genre: "Adventure",     rate: "9.5" },
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
