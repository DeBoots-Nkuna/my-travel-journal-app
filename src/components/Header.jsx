import '../index.css'
import globalIcon from '../assets/Globe.png'

export const Header = () => {
  return (
    <header className="header-container">
      <img className="img-icon" src={globalIcon} alt="Globe icon" />
      <h1 className="header-title">my travel journal.</h1>
    </header>
  )
}
