import '../styles/navStyle.css';
import {Link} from 'react-router-dom'
function Nav({menu, setMenu}) {

  
  return(
   <nav>
     <h3>Jane Turner</h3>
     <div className='nav-links'>
        <Link to= "/">
                <button className="navlink">Home</button>
        </Link>
        <Link to='/about'>
              <button className="navlink">About</button>
        </Link>
        <Link to='/gallery'>
              <button className="navlink">Gallery</button>
        </Link>
        <Link to='/exhibitions'>
              <button className="navlink">Exhibitions</button>
        </Link>
        <Link to='/contact'>
              <button className="navlink">Contact</button>
        </Link>
     </div>

     <div className={`menu-icon ${menu && 'change'}`} onClick={() => setMenu(!menu)}>
        <div className={`bar1`}></div>
        <div className={`bar2`}></div>
        <div className={`bar3`}></div>
     </div>
  </nav>
  )
}

export default Nav;