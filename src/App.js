
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About'
import Catalog from './components/Catalog'
import Styling from './components/Styling'
import Home from './components/Home'
import logo from './components/assets/images/Yellowlogo.png'  

function App() {
  return (
      <Router>
      <div className="App">
      <header>
      <nav> 
        
        <div className = "hometab"> 
            <Link to = "/Home"><img src = {logo} alt = "Logo" /></Link>
        </div>
       
        <ul> 
          <div className = "dropdown">  
         
            <Link to = "/About"><li> <h3> ABOUT </h3> </li> </Link>
            <div className = "dropcontent"> <h5> Our Mission </h5> <h5> The Founder </h5> </div>
          </div>
          <div className = "dropdown"> 
            <Link to = "/Catalog" ><li> <h3>CATALOG</h3> </li></Link>
            <div className = "dropcontent"> <h5> <em> New  </em></h5> <h5> Tops </h5> <h5> Bottoms </h5> <h5> Accessories </h5> </div>
          </div>
          <div className = "dropdown">
            <Link to = "/Styling"><li>  <h3>STYLING</h3></li> </Link>
            <div className = "dropcontent"> <h5> Sizing Chart </h5> <h5> Gallery </h5> </div>
          </div>
        </ul>
     

    </nav>
   
      
    
    
    </header>
    <div className = "borderref"></div>
    <Routes>
          <Route exact path = "/About" element = {<About/>}> </Route>
          <Route exact path = "/Catalog" element = {<Catalog/>}> </Route>
          <Route exact path = "/Styling" element = {<Styling/>}> </Route>
          <Route exact path = "/Home" element = {<Home/>}> </Route>
    </Routes>

    <footer>
      <div className = "footername">  Designed and Developed by Nolen Zhao</div>

    </footer>
    </div>
    </Router>
  );
}

export default App;
