import '../styles/paintingContainerStyle.css'
import Painting from './Painting'
import ginger from '../assets/Ginger.jpg'
import lipstick from '../assets/Lipstick.jpg'
import orchid from '../assets/Orchid.jpg'
import stargazer from '../assets/Stargazer.jpg'
import untitled1 from '../assets/Untitled1.jpg'
import untitled2 from '../assets/Untitled2.jpg'

function Paintingcontainer() {

  const images = [
    {
      id: 1,
      name: 'Untitled',
      source: untitled2,
      material: 'Oil',
      size: '40" x 40"',
      sold: true
    },
    {
      id: 2,
      name: 'Stargazer',
      source: stargazer,
      material: 'Oil',
      size: '48" x 60"',
      sold: true
    },
    {
      id: 3,
      name: 'Lipstick',
      source: lipstick,
      material: 'Oil',
      size: '48" x 60"',
      sold: false
    },
    {
      id: 4,
      name: 'Untitled',
      source: untitled1,
      material: 'Oil',
      size: '22" x 48"',
      sold: false
    },
    {
      id: 5,
      name: 'Ginger',
      source: ginger,
      material: 'Oil',
      size: '36" x 48"',
      sold: false
    },
    {
      id: 6,
      name: 'Orchid',
      source: orchid,
      material: 'Oil',
      size: '22" x 48"',
      sold: false
    }
  ]

  return(
    <div className="container">
      
      {images.map(pic => <Painting key={pic.id} info={pic}/>)}
      
    </div>

  )
}

export default Paintingcontainer