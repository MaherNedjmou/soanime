import "./Viewed.css"
import CardViewed from "../../components/cardViewed/CardViewed"

const animes = [
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    name: "HxH",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Shonen",
    name: "HxH",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Seinen",
    name: "HxH",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Adventure",
    name: "HxH",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Comedy",
    name: "HxH",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    name: "HxH",
  },
    {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    name: "HxH",
  },
    {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    name: "HxH",
  },
]
const Viewed = () => {
  return (
    <section className="most-viewed">
      <div className="most-viewed-header">
        <div>
          <p className="most-viewed-tag">Top Animes</p>
          <h2 className="most-viewed-title">Most Viewed</h2>
        </div>
        <button className="most-viewed-view-all" onClick={() => window.location.hash = 'animes'}>View All</button>
      </div>
 
      <div className="most-viewed-grid">
        {animes.map((anime, index) => (
          <CardViewed
            key={index}
            image={anime.image}
            genre={anime.genre}
            name={anime.name}
          />
        ))}
      </div>
    </section>
  )
}

export default Viewed