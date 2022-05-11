
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Titlecard from './Titlecard'
import Item from './Item'
import Logo from './assets/images/maskscream.png'
const Catalog = (props) =>
{
    let itemarray = [];
    for(let i = 0; i < 7; i++)
    {
        itemarray.push(<Item description = "description" image = {Logo}/>)
    }

    return (
        <div className = "content">
            <Titlecard title = "CATALOG"/>
            <div className = "catalogcontent">
                {itemarray}
            </div>
            
        </div>
        
        
    )
}

export default Catalog