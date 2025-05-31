import '../index.css'
import markerIcon from '../assets/marker2.png'

export const Article = ({
  img,
  title,
  country,
  googleMapsLink,
  date,
  text,
}) => {
  return (
    <article className="article-container">
      <div className="image-container">
        <img className="main-image" src={img.src} alt={img.alt} />
      </div>
      <div className="article-content">
        <div className="location-container">
          <img className="marker-icon" src={markerIcon} alt="Marker red icon" />
          <span className="location">{country}</span>
          <a href={googleMapsLink} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h2 className="title">{title}</h2>
        <p className="travel-date">{date}</p>
        <p className="place-summary">{text}</p>
      </div>
    </article>
  )
}
