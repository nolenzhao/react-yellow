


import Item from './Item'

import Camoshirttan from './assets/images/Camo-shirt-tan.png'
import Camoshirtcream from './assets/images/Camo-shirt-cream.png'

import camoshirt2 from './assets/images/camoshirt2.png'
import camoshirt1 from './assets/images/camoshirt1.png'
import Titlecard from './Titlecard'
const Tops = () =>{
    return(
        <div className = "content"> 
            <Titlecard title = "TOPS" />
            <div className = "catalogcontent">
            <Item  name = "Camo Shirt" button_num = {2} buttoncolour1 = '#c2a78d' buttoncolour2 = "#e6dcd0"
                buttonlink1 = {Camoshirttan} buttonlink2 = {Camoshirtcream} alt = "Camo Shirt" imginit = {Camoshirttan}
                num_images = {4} img1 = {Camoshirttan} img2 = {camoshirt1} img3 = {Camoshirtcream} img4 = {camoshirt2}
                description = "Each shirt contains it's own unique camo design embedded into
                 our iconic YELLOW print, making each piece one of one."/>

            
            </div>
        </div>
    


    )
}
export default Tops