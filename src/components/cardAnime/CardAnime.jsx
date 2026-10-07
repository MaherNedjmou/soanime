import "./CardAnime.css"
import { FaStar } from "react-icons/fa"

const CardAnime = ({ image, genre, title, name, rate, year }) => {
  const animeTitle = title || name

  return (
    <div className="card-anime">
      {/* Image */}
      <div className="card-anime-image">
        <img src={image} alt={animeTitle} />
        {rate && (
          <div className="card-anime-rate-badge">
            <span className="card-anime-rate">
              {rate}
              <FaStar className="star-icon" />
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="card-anime-info">
        <div>
          <p className="card-anime-genre">{genre}</p>
          <h3 className="card-anime-title">{animeTitle}</h3>
        </div>
        <button className="card-anime-explore">Explore</button>
      </div>
    </div>
  )
}

export default CardAnime
