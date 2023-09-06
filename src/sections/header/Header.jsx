import './header.css'
import data from './data'
import HeaderImage from '../../assets/kpheader.jpg'
const header = () => {
  return (
    <header id="header">
      <div className='container header__container'>
        <div className="header__profile">
          <img src={HeaderImage} alt='Portrait' />
        </div>
        <h3>Kundan Paudel</h3>
        <p>Coding enthusiast pursuing excellence in computer science. 
          Crafting innovative solutions with precision and a passion for learning.
        </p>
        <div className="header__contact">
          <a href = '#contact' className='btn primary'>Reach Me!</a>
          <a href = '#portfolio' className='btn light'>My Projects</a>
        </div>
        <div className="header__social">
          {
            data.map(item=> <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>)
          }
        </div>
      </div>
    </header>
  )
}

export default header