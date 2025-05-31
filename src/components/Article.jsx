import '../index.css'

export const Article = () => {
  return (
    <article className="article-container">
      <div className="image-container">
        <img src="" alt="img comes here" />
      </div>
      <div className="article-content">
        <div className="location-container">
          <img className="location-icon" src="" alt="location icon" />
          <span className="location">South Africa</span>
          <p>
            <a href="" target="_blank">
              View on Google Maps
            </a>
          </p>
        </div>
        <h2 className="title">Place</h2>
        <p className="date">date comes here</p>
        <p className="text"> summary comes here</p>
      </div>
    </article>
  )
}
