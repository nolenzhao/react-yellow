import Titlecard from './Titlecard'
import Item from './Item'
import YellowJeansBack from './assets/images/YellowJeansBack.png'
import YellowJeansFront from './assets/images/YellowJeansFront.png'
import YellowJeansSide from './assets/images/YellowJeansSide.png'
import YellowJeansJacketBack from './assets/images/YellowJeansJacketBack.png'
import YellowJeansJacketSide from './assets/images/YellowJeansJacketSide.png'
import YellowJeansBackCuff from './assets/images/YellowJeansBackCuff.png'
import YellowJeansHat from './assets/images/YellowJeansHat.png'
const Bottoms = () =>{
    return(
        <div className = "content">
             <Titlecard title = "Bottoms"/>
             <div className = "catalogcontent">
                 < Item name = "Yellow Jeans" button_num = {1} buttoncolour1 = "#6c9fde" buttonlink1 = {YellowJeansBack} 
                  imginit = {YellowJeansBack} alt = "Yellow Jeans"  num_images = {7} img1 = {YellowJeansBack} img2 = {YellowJeansFront}
                  img3 = {YellowJeansSide} img4 = {YellowJeansJacketBack} img5 = {YellowJeansJacketSide} img6 = {YellowJeansHat}
                  img7 = {YellowJeansBackCuff} descinit = "Sky Blue" desc1 = "Sky Blue" description = "Coming in all types of 
                  washes, these jeans have our YELLOW motorcycle design printed onto the back leg.  "/> 
             </div>
        </div>
       

    )
}

export default Bottoms