import "./Categories.css"
import CardCategory from "../../components/cardCategory/CardCategory"

const categories = [
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    name: "Brawlhalla",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    name: "Warframe",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    name: "Tower of Fantasy",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    name: "Super People",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    name: "Warframe",
  },
]

const Categories = () => {
  return (
    <section className="top-categories">
      <div className="top-categories-header">
        <p className="top-categories-tag">Genres</p>
        <h2 className="top-categories-title">Top Genres</h2>
      </div>

      <div className="top-categories-grid">
        {categories.map((cat, index) => (
          <CardCategory
            key={index}
            image={cat.image}
            genre={cat.genre}
            name={cat.name}
          />
        ))}
      </div>
    </section>
  )
}

export default Categories