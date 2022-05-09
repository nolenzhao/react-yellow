import logo from './assets/images/Yellowlogo.png'
import Catalog from './Catalog'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Styling from './Styling'
import About from './About'
const Nav = () =>
{
    return (
        <Router>
        <nav> 
            <div className = "hometab"> 
                <img src = {logo} alt = "Logo" />
            </div>
           
            <ul> 
              <div className = "dropdown">  
             
                <li><Link to = '/About'> <h3> ABOUT </h3> </Link> </li> 
                <div className = "dropcontent"> <h5> Our Mission </h5> <h5> The Founder </h5> </div>
              </div>
              <div className = "dropdown"> 
                <li> <Link to = '/Catalog'> <h3>CATALOG</h3> </Link> </li>
                <div className = "dropcontent"> <h5> New </h5> <h5> Tops </h5> <h5> Bottoms </h5> <h5> Accessories </h5> </div>
              </div>
              <div className = "dropdown">
                <li>  <Link to = '/Styling'><h3>STYLING</h3></Link> </li> 
                <div className = "dropcontent"> <h5> Sizing Chart </h5> <h5> Gallery </h5> </div>
              </div>
            </ul>
            
            <Routes>
              <Route exact path='/Catalog' element={<Catalog/>}></Route>  
              <Route exact path='/About' element={< About/>}></Route>
              <Route exact path='/Styling' element={<Styling/>}></Route>
            </Routes>
            
        </nav>

        </Router>
    )
}

export default Nav

