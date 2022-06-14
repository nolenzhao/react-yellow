


import Item from './Item'

import Camoshirttan from './assets/images/Camo-shirt-tan.png'
import Camoshirtcream from './assets/images/Camo-shirt-cream.png'

import camoshirt2 from './assets/images/camoshirt2.png'
import camoshirt1 from './assets/images/camoshirt1.png'
import BlueCamoShirtCream from './assets/images/BlueCamoShirtCream.png'
import YellowCrewneckBack from './assets/images/YellowCrewneckBack.png'
import YellowCrewneckFront from './assets/images/YellowCrewneckFront.png'
import YellowMotorcycleCream from './assets/images/YellowMotorcycleCream.png'
import YellowMotorcycleBlack from './assets/images/YellowMotorcycleBlack.png'
import Titlecard from './Titlecard'
const Tops = () =>{
    return(
        <div className = "content"> 
            <Titlecard title = "TOPS" />
            <div className = "catalogcontent">
            <Item  name = "Blue Camo Shirt" button_num = {2} buttoncolour1 = '#c2a78d' buttoncolour2 = "#e6dcd0"
                buttonlink1 = {Camoshirttan} buttonlink2 = {BlueCamoShirtCream} alt = "Camo Shirt" imginit = {Camoshirttan}
                num_images = {5} img1 = {BlueCamoShirtCream} img2 = {camoshirt1} img3 = {Camoshirttan} img4 = {Camoshirtcream} img5 = {camoshirt2} 
                 descinit = "Sand" desc1 = "Sand" desc2 = "Cream" description = "Each shirt contains it's own unique 
                 camo design embedded into our iconic YELLOW print, making each piece one of one."/>
            
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
export default Tops