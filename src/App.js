
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
import tiktok from './components/assets/images/tiktok.png'
import IndividualItemPage from './components/IndividualItemPage';
import hamburgermenu from './components/assets/images/bars-solid.svg'
import shoppingcart from './components/assets/images/cart-shopping-solid.svg';
import xmark from './components/assets/images/xmark-solid.svg';
import ShoppingCart from './components/ShoppingCart'
import {useState} from 'react'

const App = () => {

  const [menuopen, setmenuopen] = useState(false);
  const [mainmenu, setmainmenu] = useState('nonvis')
 
  const menuvis = () =>{
    if(menuopen === false)
    {
      
      setmainmenu('menuvis')
      setmenuopen(true)
     
    }
    else{
      setmainmenu('nonvis')
      setmenuopen(false)
    }
  }
  

  return (
      <Router>
      <div className="App">
      <header>
      <nav> 
        
      <div className = "topicons">
        <div id = "homelogo" className = "hometab"> 
            <Link to = "/react-yellow"><img src = {logo} alt = "Logo" /></Link>
         </div>
            <div className='menuicon'>
            <div className = 'carticon'>
              <Link to = '/Shoppingcart'> <img src = {shoppingcart}/></Link> 
             </div>
             <div className = 'hamburgericon'>
           <img onClick = {() => menuvis(menuopen)} id = 'hamburgericon' src = {hamburgermenu}/>
           </div>
           </div>
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
          <Route exact path = "/IndividualItemPage" element = {<IndividualItemPage/>}></Route>   
          <Route exact path = "/Catalog" element = {<Catalog/>}> </Route>
          <Route exact path = "/react-yellow" element = {<Home/>}> </Route>
          <Route exact path = "/Sizingchart" element = {<Sizingchart/>}> </Route>
          <Route exact path = "/Gallery" element = {<Gallery/>}> </Route>
          <Route exact path = "/Mission" element = {<Mission/>}></Route>
          <Route exact path = "/Founder" element = {<Founder/>}></Route>
          <Route exact path = "/Tops" element = {<Tops/>}></Route>
          <Route exact path = "/Bottoms" element = {<Bottoms/>}></Route>
          <Route exact path = "/Newreleases" element = {<Newreleases/>}></Route>
          <Route exact path = "/Accessories" element = {<Accessories/>}></Route>
          <Route exact path = '/Shoppingcart' element = {<ShoppingCart/>}></Route>
    </Routes>

    <footer>
      <div className = "footerlinks">
        <div className = "footername1"> 
          <div className = 'devdescription'> Designed and Developed by Nolen Zhao</div>
          <div className = "devsocials1"> 
            <a href = "https://www.linkedin.com/in/nolen-zhao/" target = "_blank"><img className = 'devlinks' src = {linkedin} /></a>
            <a href = "https://github.com/nolenzhao" target = "_blank"> <img className = 'devlinks'src = {github} /> </a>
          </div>
          <div className = 'footerlove1'> Made with ♥ in Vancouver</div>
        </div>

        <div className = "footertitle">
        <h1>YELLOW+</h1>
      </div>

        <div className = "footername2">
          <div className = 'followanywhere'> Follow YELLOW, the brand, anywhere. </div>
          <div className = "sitesocials1"> 
            <a href = "mailto:zhaonolen@gmail.com"> <img src = {mailicon}/> </a>
            <a href = "https://www.instagram.com/yellow.xyz/" target = "_blank"> <img src = {instagram}/> </a>
            <a href="https://www.tiktok.com/en/" target = "_blank"> <img src = {tiktok} /> </a>
          </div>
        </div>
      </div>
      
      <div className = {mainmenu}>
          <div className = 'xmark'>
            <img onClick = {() => menuvis(menuopen)} src = {xmark}/>
          </div>
          <div className = 'mobilenav'>
            <div className = 'mobsub'>
            <h3> ABOUT </h3>
            <Link onClick  = {() =>menuvis(menuopen)}to = "/Mission"> <h4> Our Mission</h4> </Link>
            <Link onClick = {() => menuvis(menuopen)} to = "/Founder"> <h4> The Founder</h4></Link>
            </div>
            <div className = 'mobsub'>
              <Link onClick  = {() =>menuvis(menuopen)} to = "/Catalog"><h3> CATALOG</h3></Link>
              <Link onClick  = {() =>menuvis(menuopen)} to = "/Newreleases"> <h4> New</h4></Link>
              <Link onClick  = {() =>menuvis(menuopen)} to = "/Tops"> <h4> Tops</h4></Link>
              <Link onClick  = {() =>menuvis(menuopen)} to = "/Bottoms"> <h4> Bottoms</h4></Link>
              <Link onClick  = {() =>menuvis(menuopen)} to = "/Accessories"> <h4> Accessories</h4> </Link>
            </div>
            <div className = 'mobsub'>
              <h3> STYLING</h3>
              <Link onClick = {() => menuvis(menuopen)} to = "/Sizingchart"><h4> Sizing Chart</h4></Link>
              <Link onClick = {() => menuvis(menuopen)} to = "/Gallery"> <h4> Gallery</h4> </Link> 
            </div>
          
          </div>

          <div> 

            logo or smt
          </div>
        </div>
      
    </footer>
    </div>
    </Router>
  );
}

export default App;

// <div className = "footername">  Designed and Developed by Nolen Zhao</div>

/*

   <a href = "mailto:zhaonolen@gmail.com"> <img src = {mailicon}/> </a>
        <a href = "https://www.instagram.com/yellow.xyz/" target = "_blank"> <img src = {instagram}/> </a>
        <a href="https://www.tiktok.com/en/" target = "_blank"> <img src = {tiktok} /> </a>
        */