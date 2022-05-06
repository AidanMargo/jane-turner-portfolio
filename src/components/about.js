import untitled from '../assets/Untitled2.jpg'
import '../styles/aboutStyle.css'

function about() {

  return(
    <div className="about-container">
      <h2>About</h2>
      <img src={untitled} alt="painting"/>
      <p><span className="name">Jane</span> began taking studio art lessons at age ten, and continued throughout high school.
         She taught art in public school for twenty-nine years while studying at Coppini Academy of Fine Art. </p> 
      
      <p> Her studies at Coppini included watercolor, still life, portraits, oils, and plain aire landscapes. Currently, Jane is working on a body of work focused on  botanicals. Her first instructor studied and painted with O’Keefe. Through this influence, she developed her keen sense of color and affinity for organic forms, which led to her unique and expressive style.</p>

      <blockquote>
        "I believe life experiences teach us how to feel. As artists, we need to feel what we want to create in order
        to give our work expression and soul. If you cannot feel, you cannot truly see. When we attempt to appreciate
        and engage our five senses, life becomes richly three dimensional." - Jane Turner
      </blockquote>
      
    </div>
  )
}

export default about