import './navbar.css'
import Logo from '../../assets/KPLogo.png'
import data from './data'
import {MdDarkMode} from 'react-icons/md'

const navbar = () => {
  return (
    <nav>
      <div className='container nav__container'>
        <a href="index.html" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id='dark__mode'>
          <MdDarkMode/>
        </button>
      </div>
    </nav>
  )
}

export default navbar