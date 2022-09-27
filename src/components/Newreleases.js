
import Titlecard from './Titlecard'


import NewItem from './NewItem'
const Newreleases = () =>{
  
    return(
        <div className = "content">
             <Titlecard title = "NEW RELEASES"/>
            <div className = "catalogcontent">

            <NewItem item_url = "https://yellow-website-server.herokuapp.com/items/2"/>
            </div>
        </div>
      

    )
}
export default Newreleases