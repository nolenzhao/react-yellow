
import Titlecard from './Titlecard'
import GalleryItems from './GalleryItems'
import YellowBenGeorge from './assets/images/YellowBenGeorge.jpg'
import YellowJackTiger from './assets/images/YellowJackTiger.JPG'
import YellowClothesSpread from './assets/images/YellowClothesSpread.png'
import YellowAssorted from './assets/images/YellowAssorted.png'
const Gallery = () =>
{
    return(
        <div className = "content">
            <Titlecard title = "GALLERY"/>
           
            <div className = "gallerydescription">
                <p> Below is a collection of photos and videos taken in all <strong>YELLOW</strong>. 
                </p>
                <br/>
                <p> 
                    Each piece of media showcases the fit, cut, and styling of our garments, 
                    in order to inspire your next great outift. 
                </p>
                <br/>
                <p> 
                    Take a moment and capture yourself in all <strong>YELLOW</strong> to be placed on our wall,
                    by sending us a snapshot through any of our online platforms.
                </p>
            </div>
            <div clasName = "galleryitems">   
             <GalleryItems name = "The Blue Man Group" img = {YellowBenGeorge} date = "05/22/22" 
             description = "George wears a YELLOW Mask as well as our YELLOW Crew. Shot minutes before yellow milk is spewed everywhere
             in a lactose-infused mess."/>
             <GalleryItems name = "Above Par" description = "Jack dons our YELLOW Ennead Crewneck. Tiger watches on as yellow milk
             is spilled."
             img = {YellowJackTiger} date = "05/22/22"/>
            <GalleryItems name = "Photo Prep" description = "A spread of merchandise in preparation for photographing. Items include
            our Ennead Crews, assorted T-shirts, tote bags, shorts, and jeans." img = {YellowClothesSpread} date = "05/22/22" />
            </div>
            <GalleryItems name = "Assorted Shirts" img = {YellowAssorted} description = "An assortmnet of T-shirts with various 
            designs and colours. Designs include Green Camo and Spray." date = "05/22/22"/>
        </div>
    )
}

export default Gallery