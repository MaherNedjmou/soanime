// Trending.jsx
import "./Trending.css"
import CardTrending from "../../components/cardTrending/CardTrending"
import { Link } from "react-router"

const animes = [
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    title: "Hunter X Hunter",
    rate: "9.5",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    title: "Hunter X Hunter",
    rate: "9.5",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    title: "Hunter X Hunter",
    rate: "9.5",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    title: "Hunter X Hunter",
    rate: "9.5",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    title: "Hunter X Hunter",
    rate: "9.5",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    title: "Hunter X Hunter",
    rate: "9.5",
  },
    {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    title: "Hunter X Hunter",
    rate: "9.5",
  },
    {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    title: "Hunter X Hunter",
    rate: "9.5",
  },
]

const Trending = () => {
  return (
    <section className="trending">

      {/* Header */}
      <div className="trending-header">
        <div>
          <p className="trending-tag">TRENDING</p>
          <h2 className="trending-title">Trending Animes</h2>
        </div>
        <Link to="/animes">
          <button className="trending-view-all">VIEW ALL</button>
        </Link>
      </div>

      {/* Cards */}
      <div className="trending-grid">
        {animes.map((anime, index) => (
          <CardTrending
            key={index}
            image={anime.image}
            genre={anime.genre}
            title={anime.title}
            rate={anime.rate}
          />
        ))}
      </div>

    </section>
  )
}

export default Trending