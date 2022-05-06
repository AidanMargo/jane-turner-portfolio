import '../styles/menuStyle.css'

export default function Menu({menu}) {

 return (
    <div className='menu'>
      <ul className='navlinks'>
        <a href="/"><li>Home</li></a>
        <a href="/about"><li>About</li></a>
        <a href="/gallery"><li>Gallery</li></a>
        <a href="/news"><li>News</li></a>
        <a href="/contact"><li>Contact</li></a>
      </ul>
   </div>
 ) 
}