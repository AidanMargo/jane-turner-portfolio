import '../styles/navStyle.css';
import {useState} from 'react'

function Nav({menu, setMenu}) {

  
  return(
   <nav>
     <h3>Jane Turner</h3>
     <div className='nav-links'>
      <ul className='links'>
        <a href="/"><li>Home</li></a>
        <a href="/about"><li>About</li></a>
        <a href="/gallery"><li>Gallery</li></a>
        <a href="/news"><li>News</li></a>
        <a href="/contact"><li>Contact</li></a>
      </ul>
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