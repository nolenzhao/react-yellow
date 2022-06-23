
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Titlecard from './Titlecard'
import Item from './Item'

import Camoshirttan from './assets/images/Camo-shirt-tan.png'
import Camoshirtcream from './assets/images/Camo-shirt-cream.png'
import Totebag1 from './assets/images/totebag1.png'
import camoshirt2 from './assets/images/camoshirt2.png'
import camoshirt1 from './assets/images/camoshirt1.png'
import maskhead from './assets/images/maskhead.png'
import totebag2 from './assets/images/totebag2.png'
import BlueCamoShirtCream from './assets/images/BlueCamoShirtCream.png'
import ToteBags from './assets/images/ToteBags.png'
import YellowMask from './assets/images/YellowMask.png'
import RedMask from './assets/images/RedMask.png'
import YellowJeansBack from './assets/images/YellowJeansBack.png'
import YellowJeansFront from './assets/images/YellowJeansFront.png'
import YellowJeansSide from './assets/images/YellowJeansSide.png'
import YellowJeansJacketBack from './assets/images/YellowJeansJacketBack.png'
import YellowJeansJacketSide from './assets/images/YellowJeansJacketSide.png'
import YellowJeansBackCuff from './assets/images/YellowJeansBackCuff.png'
import YellowJeansHat from './assets/images/YellowJeansHat.png'
import YellowCrewneckBack from './assets/images/YellowCrewneckBack.png'
import YellowCrewneckFront from './assets/images/YellowCrewneckFront.png'
import YellowMotorcycleCream from './assets/images/YellowMotorcycleCream.png'
import YellowMotorcycleBlack from './assets/images/YellowMotorcycleBlack.png'
const Catalog = (props) =>
{
    
    

    return (
        <div className = "content">
            <Titlecard title = "CATALOG"/>
            <div className = "catalogcontent">
                <Item  name = "Blue Camo Shirt" button_num = {2} buttoncolour1 = '#c2a78d' buttoncolour2 = "#e6dcd0"
                buttonlink1 = {Camoshirttan} buttonlink2 = {BlueCamoShirtCream} alt = "Camo Shirt" imginit = {Camoshirttan}
                num_images = {5} img1 = {BlueCamoShirtCream} img2 = {camoshirt1} img3 = {Camoshirttan} img4 = {Camoshirtcream} img5 = {camoshirt2} 
                 descinit = "Sand" desc1 = "Sand" desc2 = "Cream" description = "Each shirt contains it's own unique 
                 camo design embedded into our iconic YELLOW print, making each piece one of one."/>
                
                <Item name = "Face Cover" button_num = {1} buttoncolour1 = 'black' buttonlink1 = {RedMask} alt = "Face Cover"
                 imginit = {RedMask} num_images = {3} img1 = {RedMask} img2 = {YellowMask} img3 = {maskhead} descinit = "Multicolour" 
                 desc1 = "Multicolour" description = "Made from recycled tee shirts, this soft, breathable, and 
                 washable face cover is perfect for any crowded event. Each covering displays our iconic YELLOW print."  />

                <Item name = "Tote Bag" button_num = {1} buttoncolour1 = "black" buttonlink1 = {ToteBags} alt = "Tote Bag"
                 imginit = {ToteBags} num_images = {3} img1 = {ToteBags} img2 = {totebag2} img3 = {Totebag1} descinit = "Multicolour" desc1 = "Multicolour"
                 description = "A sturdy replacement to the classic backpack, this tote bag displays both 
                 our iconic YELLOW print as well as the infamous D. B. Cooper."/>

<                 Item name = "Yellow Jeans" button_num = {1} buttoncolour1 = "#6c9fde" buttonlink1 = {YellowJeansBack} 
                  imginit = {YellowJeansBack} alt = "Yellow Jeans"  num_images = {7} img1 = {YellowJeansBack} img2 = {YellowJeansFront}
                  img3 = {YellowJeansSide} img4 = {YellowJeansJacketBack} img5 = {YellowJeansJacketSide} img6 = {YellowJeansHat}
                  img7 = {YellowJeansBackCuff} descinit = "Sky Blue" desc1 = "Sky Blue" description = "Coming in all types of 
                  washes, these jeans have our YELLOW motorcycle design printed onto the back leg.  "/> 

                  <Item name = "Ennead Crewneck" button_num = {1} buttoncolour1 = "#323c71" buttonlink1 = {YellowCrewneckFront}
                  imginit = {YellowCrewneckFront} alt = "Ennead Crewneck" num_images = {2} img1 = {YellowCrewneckFront} 
                  img2 = {YellowCrewneckBack} descinit = "Navy Blue" desc1 = "Navy Blue" description = "Our Ennead Crewneck
                  features our compressed YELLOW design on the front and the YELLOW alien on the back."/>

                  <Item name = "Yellow Motorcycle Shirt" button_num = {2} buttoncolour1 = "#e6dcd0" buttoncolour2 = "black"
                    buttonlink1 = {YellowMotorcycleCream} buttonlink2 = {YellowMotorcycleBlack} num_images = {2} imginit = {YellowMotorcycleCream}
                    img1 = {YellowMotorcycleCream} img2 = {YellowMotorcycleBlack} alt = "Yellow Motorcycle Shirt" descinit = "Cream"
                    desc1 = "Cream" desc2 = "Black" description = "Printed on the the left breast is a familiar emblem with
                    a YELLOW twist. This design is sure to draw the eyes of motorcycle enthusiasts."/>

            </div>
            
        </div>
        
        
    )
}

export default Catalog