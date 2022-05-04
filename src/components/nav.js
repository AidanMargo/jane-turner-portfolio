import '../styles/navStyle.css';
import {useState} from 'react'

function Nav({menu, setMenu}) {

  
  return(
   <nav>
     <h3>Jane Turner</h3>
     <div className={`menu-icon ${menu && 'change'}`} onClick={() => setMenu(!menu)}>
        <div className={`bar1`}></div>
        <div className={`bar2`}></div>
        <div className={`bar3`}></div>
     </div>
  </nav>
  )
}

export default Nav;