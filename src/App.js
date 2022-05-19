
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Catalog from './components/Catalog'

import Home from './components/Home'
import Sizingchart from './components/Sizingchart'
import Gallery from './components/Gallery'
import Founder from './components/Founder'
import Mission from './components/Mission'
import Newreleases from './components/Newreleases'
import Accessories from './components/Accessories'
import Tops from './components/Tops'
import Bottoms from './components/Bottoms'
import logo from './components/assets/images/Yellowlogo.png'  
import instagram from './components/assets/images/instagram.png'
import linkedin from './components/assets/images/linkedin.png'
import github from './components/assets/images/github.png'
import mailicon from './components/assets/images/gmail.png'
const App = () => {
  return (
      <Router>
      <div className="App">
      <header>
      <nav> 
        
        <div id = "homelogo" className = "hometab"> 
            <Link to = "/Home"><img src = {logo} alt = "Logo" /></Link>
        </div>
       
        <ul> 
          <div className = "dropdown">  
         
            <li> <h3> ABOUT </h3> </li> 
            <div className = "dropcontent"> <Link to = "/Mission"><h5> Our Mission </h5></Link> 
            <Link to = "/Founder" > <h5> The Founder </h5></Link> </div>
          </div>
          <div className = "dropdown"> 
            <Link to = "/Catalog" ><li> <h3>CATALOG</h3> </li></Link>
            <div className = "dropcontent"> <Link to = "/Newreleases"><h5> <em> New  </em></h5></Link> 
            <Link to = "/Tops"><h5> Tops </h5></Link> <Link to = "/Bottoms"> <h5> Bottoms </h5></Link> 
            <Link to = "/Accessories"> <h5> Accessories </h5> </Link> </div>
          </div>
          <div className = "dropdown">
            <li>  <h3>STYLING</h3></li> 
            <div className = "dropcontent"> <Link to = "/Sizingchart"><h5> Sizing Chart </h5></Link> 
            <Link to = "/Gallery" ><h5> Gallery </h5></Link> </div>
          </div>
        </ul>
     

    </nav>
   
      
    
    
    </header>
    <div className = "borderref"></div>
    <Routes>
         
          <Route exact path = "/Catalog" element = {<Catalog/>}> </Route>
          
          <Route exact path = "/Home" element = {<Home/>}> </Route>
          <Route exact path = "/Sizingchart" element = {<Sizingchart/>}> </Route>
          <Route exact path = "/Gallery" element = {<Gallery/>}> </Route>
          <Route exact path = "/Mission" element = {<Mission/>}></Route>
          <Route exact path = "/Founder" element = {<Founder/>}></Route>
          <Route exact path = "/Tops" element = {<Tops/>}></Route>
          <Route exact path = "/Bottoms" element = {<Bottoms/>}></Route>
          <Route exact path = "/Newreleases" element = {<Newreleases/>}></Route>
          <Route exact path = "/Accessories" element = {<Accessories/>}></Route>
    </Routes>

    <footer>
      <div className = "footername">  Designed and Developed by Nolen Zhao</div>
      <div className = "footerlove"> Made with ♥ in Vancouver</div>
      <div className = "devsocials"> 
        <a href = "https://www.linkedin.com/in/nolen-zhao/" target = "_blank"><img src = {linkedin} /></a>
        
        <a href = "https://github.com/nolenzhao" target = "_blank"> <img src = {github} /> </a>
      </div>
      
      <div className = 'followanywhere'> Follow YELLOW, the brand, anywhere. </div>
      <div className = "sitesocials"> 
    
        <a href = "mailto:zhaonolen@gmail.com"> <img src = {mailicon}/> </a>
        <a href = "https://www.instagram.com/yellow.xyz/" target = "_blank"> <img src = {instagram}/> </a>
      
      </div>
      <div className = "footertitle">
         <a href = "#homelogo"><h1>YELLOW+</h1></a>
      </div>
    </footer>
    </div>
    </Router>
  );
}

export default App;
