
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Titlecard from './Titlecard'
import Item from './Item'
import Jakescream from './assets/images/maskscream.png'
import Camoshirttan from './assets/images/Camo-shirt-tan.png'
import Camoshirtcream from './assets/images/Camo-shirt-cream.png'
import Totebag1 from './assets/images/totebag1.png'
import camoshirt2 from './assets/images/camoshirt2.png'
import camoshirt1 from './assets/images/camoshirt1.png'
import maskhead from './assets/images/maskhead.png'
import totebag2 from './assets/images/totebag2.png'
const Catalog = (props) =>
{
    
    

    return (
        <div className = "content">
            <Titlecard title = "CATALOG"/>
            <div className = "catalogcontent">
                <Item  name = "Camo Shirt" button_num = {2} buttoncolour1 = '#c2a78d' buttoncolour2 = "#e6dcd0"
                buttonlink1 = {Camoshirttan} buttonlink2 = {Camoshirtcream} alt = "Camo Shirt" imginit = {Camoshirttan}
                num_images = {4} img1 = {Camoshirttan} img2 = {camoshirt1} img3 = {Camoshirtcream} img4 = {camoshirt2} 
                 descinit = "Sand" desc1 = "Sand" desc2 = "Cream"
                description = "Each shirt contains it's own unique camo design embedded into
                 our iconic YELLOW print, making each piece one of one."/>
                
                <Item name = "Face Cover" button_num = {1} buttoncolour1 = '#0966e6' buttonlink1 = {Jakescream} alt = "Face Cover"
                 imginit = {Jakescream} num_images = {2} img1 = {Jakescream} img2 = {maskhead} descinit = "Royal Blue" 
                 desc1 = "Royal Blue" description = "Made from recycled tee shirts, this soft, breathable, and 
                 washable face cover is perfect for any crowded event. Each covering displays our iconic YELLOW print."  />

                <Item name = "Tote Bag" button_num = {1} buttoncolour1 = "#0966e6" buttonlink1 = {Totebag1} alt = "Tote Bag"
                 imginit = {Totebag1} num_images = {2} img1 = {Totebag1} img2 = {totebag2} descinit = "Royal Blue" desc1 = "Royal Blue"
                 description = "A sturdy replacement to the classic backpack, this tote bag displays both 
                 our iconic YELLOW print as well as the infamous D. B. Cooper."/>
            </div>
            
        </div>
        
        
    )
}

export default Catalog