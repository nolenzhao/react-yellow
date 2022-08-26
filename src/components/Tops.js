



import NewItem from './NewItem'

import Titlecard from './Titlecard'
const Tops = () =>{
    return(
        <div className = "content"> 
            <Titlecard title = "TOPS" />
            <div className = "catalogcontent">
           
            <NewItem item_url = "https://yellow-website-server.herokuapp.com/items/2"/>
            <NewItem item_url = "https://yellow-website-server.herokuapp.com/items/4"/>
            <NewItem item_url = "https://yellow-website-server.herokuapp.com/items/6"/>

        </div>

        </div>
    


    )
}
export default Tops