
import Titlecard from './Titlecard'


import NewItem from './NewItem'
const Newreleases = () =>{
    /*
             <div id = "newpending">
                <h3> New Releases Pending</h3>
            </div>
            */
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