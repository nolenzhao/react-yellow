
import Titlecard from './Titlecard'
import YellowCrewneckBack from './assets/images/YellowCrewneckBack.png'
import YellowCrewneckFront from './assets/images/YellowCrewneckFront.png'
import Item from './Item'
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
                 <Item name = "Yellow Crewneck" button_num = {1} buttoncolour1 = "#323c71" buttonlink1 = {YellowCrewneckFront}
                  imginit = {YellowCrewneckFront} alt = "Yellow Crewneck" num_images = {2} img1 = {YellowCrewneckFront} 
                  img2 = {YellowCrewneckBack} descinit = "Navy Blue" desc1 = "Navy Blue" description = "Yellow Crewneck..."/>
             
            </div>
        </div>
      

    )
}
export default Newreleases