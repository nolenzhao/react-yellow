import Titlecard from './Titlecard'
import Jakescream from './assets/images/maskscream.png'
import maskhead from './assets/images/maskhead.png'
import totebag2 from './assets/images/totebag2.png'
import Totebag1 from './assets/images/totebag1.png'
import RedMask from './assets/images/RedMask.png'
import YellowMask from './assets/images/YellowMask.png'
import ToteBags from './assets/images/ToteBags.png'
import Item from './Item'
const Accessories = () =>{
    return(
        <div className = "content">
             <Titlecard title = "ACCESSORIES"/>
             <div className = "catalogcontent">
             <Item name = "Face Cover" button_num = {1} buttoncolour1 = 'black' buttonlink1 = {RedMask} alt = "Face Cover"
                 imginit = {RedMask} num_images = {3} img1 = {RedMask} img2 = {YellowMask} img3 = {maskhead} descinit = "Multicolour" 
                 desc1 = "Multicolour" description = "Made from recycled tee shirts, this soft, breathable, and 
                 washable face cover is perfect for any crowded event. Each covering displays our iconic YELLOW print."  />


            <Item name = "Tote Bag" button_num = {1} buttoncolour1 = "black" buttonlink1 = {ToteBags} alt = "Tote Bag"
                 imginit = {ToteBags} num_images = {3} img1 = {ToteBags} img2 = {totebag2} img3 = {Totebag1} descinit = "Multicolour" desc1 = "Multicolour"
                 description = "A sturdy replacement to the classic backpack, this tote bag displays both 
                 our iconic YELLOW print as well as the infamous D. B. Cooper."/>
             </div>
            </div>
    )
      
       
}

export default Accessories