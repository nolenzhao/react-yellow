import Titlecard from './Titlecard'
import NewItem from './NewItem';

const Accessories = () =>{
    return(
        <div className = "content">
             <Titlecard title = "ACCESSORIES"/>
             <div className = "catalogcontent">
            
            <NewItem item_url = "https://yellow-website-server.herokuapp.com/items/3"/>
            <NewItem item_url = "https://yellow-website-server.herokuapp.com/items/1"/>
             </div>
            </div>
    )
      
       
}

export default Accessories