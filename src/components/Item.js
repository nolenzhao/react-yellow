
import ColourButton from './ColourButton';
import {useState} from 'react';
import camoshirttan from './assets/images/Camo-shirt-tan.png'
import camoshirtcream from './assets/images/Camo-shirt-cream.png'

const Item = (props) =>
{ 
    let buttoncolours = [props.buttoncolour1, props.buttoncolour2, props.buttoncolour3, props.buttoncolour4, props.buttoncolour5];
    let buttonlinks = [props.buttonlink1, props.buttonlink2, props.buttonlink3, props.buttonlink4, props.buttonlink5];
    let button_arr = [];
    let button_num = props.button_num;
   for(let i = 0; i < button_num; i++)
   {
        button_arr.push(<button onClick = {() => setclothescolour(buttonlinks[i])} style = {{backgroundColor: buttoncolours[i]}} 
        className = "actualbuttons"> </button>)
   }

   const [clothescolour, setclothescolour] = useState(props.imginit)

    return(
     <div className = "itemcontainer">
        <div className = "clothesimage"> 
            <img src = {clothescolour} alt = {props.alt}/>
        </div>
        <div className = "colourbuttons">
           {button_arr}
            
        </div>
        <p className = "clothesdescription"> {props.description}  </p> 
        
    </div>
    )
}

export default Item