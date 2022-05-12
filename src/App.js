
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About'
import Catalog from './components/Catalog'
import Styling from './components/Styling'
import Home from './components/Home'
import Sizingchart from './components/Sizingchart'
import Gallery from './components/Gallery'
import Founder from './components/Founder'
import Mission from './components/Mission'
import logo from './components/assets/images/Yellowlogo.png'  

const App = () => {
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
            <div className = "dropcontent"> <Link to = "/Mission"><h5> Our Mission </h5></Link> 
            <Link to = "/Founder" > <h5> The Founder </h5></Link> </div>
          </div>
          <div className = "dropdown"> 
            <Link to = "/Catalog" ><li> <h3>CATALOG</h3> </li></Link>
            <div className = "dropcontent"> <h5> <em> New  </em></h5> <h5> Tops </h5> <h5> Bottoms </h5> <h5> Accessories </h5> </div>
          </div>
          <div className = "dropdown">
            <Link to = "/Styling"><li>  <h3>STYLING</h3></li> </Link>
            <div className = "dropcontent"> <Link to = "/Sizingchart"><h5> Sizing Chart </h5></Link> 
            <Link to = "/Gallery" ><h5> Gallery </h5></Link> </div>
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
          <Route exact path = "/Sizingchart" element = {<Sizingchart/>}> </Route>
          <Route exact path = "/Gallery" element = {<Gallery/>}> </Route>
          <Route exact path = "/Mission" element = {<Mission/>}></Route>
          <Route exact path = "/Founder" element = {<Founder/>}></Route>
    </Routes>

    <footer>
      <div className = "footername">  Designed and Developed by Nolen Zhao</div>

    </footer>
    </div>
    </Router>
  );
}

export default App;
