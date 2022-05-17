
import '../styles/paintingContainerStyle.css'

function painting({info:{name, source, material, size, sold}}) {

  return(
    <div className="painting-info">
        <img  className= 'photo' src={source} alt="art"/>
        <h5>{name}, {material}</h5>
        <h5>{size}</h5>
        {sold && <h5>Sold</h5>}
    </div>
  )
}

export default painting