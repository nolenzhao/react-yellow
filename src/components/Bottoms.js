import Titlecard from './Titlecard'
import NewItem from './NewItem';
const Bottoms = () =>{
    return(
        <div className = "content">
             <Titlecard title = "Bottoms"/>
             <div className = "catalogcontent">
              
              <NewItem item_url = "https://yellow-website-server.herokuapp.com/items/5"/>
             </div>
        </div>
       

    )
}

export default Bottoms