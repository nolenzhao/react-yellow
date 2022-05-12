
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Titlecard from './Titlecard'
import Item from './Item'
import Jakescream from './assets/images/maskscream.png'
import Camoshirttan from './assets/images/Camo-shirt-tan.png'
import Camoshirtcream from './assets/images/Camo-shirt-cream.png'
const Catalog = (props) =>
{
    let itemarray = [];
    

    return (
        <div className = "content">
            <Titlecard title = "CATALOG"/>
            <div className = "catalogcontent">
                <Item description = "Camo shirt" button_num = {2} buttoncolour1 = '#b0947a' buttoncolour2 = "#e6dcd0"
                buttonlink1 = {Camoshirttan} buttonlink2 = {Camoshirtcream} alt = "Camo Shirt" imginit = {Camoshirtcream}/>
                
            </div>
            
        </div>
        
        
    )
}

export default Catalog