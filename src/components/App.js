import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Paintingcontainer from './PaintingContainer';
import News from './News';
import About from './About';
import Nav from './Nav';
import Contact from './Contact';
import Menu from './Menu';
import Landing from './Landing';
import '../styles/app.css'
import AddImage from './AddImage';

function App() {

  const [menu, setMenu] = useState(false)


  return (
    <div className="App">

     <BrowserRouter>
     {menu && <Menu />}
      <Nav menu={menu} setMenu={setMenu}/>
      <Routes>
       <Route path="/" element={<Landing/>}/>
       <Route path="/upload" element={<AddImage />}/>
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
