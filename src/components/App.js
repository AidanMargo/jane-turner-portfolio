import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Paintincontainer from './paintingContainer';
import News from './news';
import About from './about';
import Nav from './nav';
import Menu from './Menu';
import Landing from './Landing';
import '../styles/app.css'

function App() {

  const [menu, setMenu] = useState(false)


  return (
    <div className="App">
     {menu && <Menu />}
      <Nav menu={menu} setMenu={setMenu}/>

     <BrowserRouter>
      <Routes>
       <Route path="/" element={<Landing/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/news" element={<News/>}/>
      </Routes>
     </BrowserRouter>


    </div>
  );
}

export default App;
