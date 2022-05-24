import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Paintingcontainer from './PaintingContainer';
import News from './news';
import About from './about';
import Nav from './nav';
import Contact from './Contact';
import Menu from './Menu';
import Landing from './Landing';
import '../styles/app.css'

function App() {

  const [menu, setMenu] = useState(false)


  return (
    <div className="App">

     <BrowserRouter>
     {menu && <Menu />}
      <Nav menu={menu} setMenu={setMenu}/>
      <Routes>
       <Route path="/" element={<Landing/>}/>
       <Route path="/gallery" element={<Paintingcontainer />}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact />}/>
       <Route path="/news" element={<News/>}/>
      </Routes>
     </BrowserRouter>


    </div>
  );
}

export default App;
