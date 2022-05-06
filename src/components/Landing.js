import '../styles/landingStyle.css'
import lipstick from '../assets/Lipstick.jpg'
import {Link} from 'react-router-dom'

function Landing() {
  return(
    <>
      <div className="intro">

          
          <p className="hero">Fine Artist and Instructor based in Fort Worth.</p>
          <br></br>
          <p>Capturing the world with oil and canvas is a skill not many have mastered quite lane Jane Turner has. 
          Her experience and detailed observations speak for themselves, as each one of her works demands to be seen.</p>
        

        <div className='img-container'>
          <img src={lipstick} alt="painting"/>
        </div>
      </div>

      <Link to="/gallery">
        <div className='landing-btn'>
          <span>See my work</span>
        </div>
      </Link>
        
    </>
  )
}

export default Landing;