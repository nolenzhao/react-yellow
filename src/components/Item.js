
import ColourButton from './ColourButton'
const Item = (props) =>
{ 
    return(
     <div className = "itemcontainer">
        <div className = "clothesimage"> 
            <img src = {props.image} alt = {props.alt}/>
        </div>
        <div className = "colourbuttons">
            <ColourButton/>
        </div>
        <p className = "clothesdescription"> {props.description}</p> 
        
    </div>
    )
}

export default Item