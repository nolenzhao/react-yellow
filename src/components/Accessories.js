import Titlecard from './Titlecard'
import Jakescream from './assets/images/maskscream.png'
import maskhead from './assets/images/maskhead.png'
import totebag2 from './assets/images/totebag2.png'
import Totebag1 from './assets/images/totebag1.png'
import Item from './Item'
const Accessories = () =>{
    return(
        <div className = "content">
             <Titlecard title = "ACCESSORIES"/>
             <div className = "catalogcontent">
             <Item name = "Face Cover" button_num = {1} buttoncolour1 = '#0966e6' buttonlink1 = {Jakescream} alt = "Face Cover"
              imginit = {Jakescream} num_images = {2} img1 = {Jakescream} img2 = {maskhead} description = "Made from recycled tee shirts, this soft, breathable, and 
                washable face cover is perfect for any crowded event. Each covering displays our iconic YELLOW print."  />
            <Item name = "Tote Bag" button_num = {1} buttoncolour1 = "#0966e6" buttonlink1 = {Totebag1} alt = "Tote Bag"
                 imginit = {Totebag1} num_images = {2} img1 = {Totebag1} img2 = {totebag2} description = "A sturdy replacement to the classic backpack, this tote bag displays both 
                 our iconic YELLOW print as well as the infamous D. B. Cooper."/>
             </div>
            </div>
    )
      
       
}

export default Accessories