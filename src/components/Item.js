
import ColourButton from './ColourButton';
import {useState} from 'react';
import camoshirttan from './assets/images/Camo-shirt-tan.png'
import camoshirtcream from './assets/images/Camo-shirt-cream.png'

const Item = (props) =>
{ 
    let button_num = props.button_num;
    let button_arr = []
    
   for(let i = 0; i < button_num; i++)
   {
        button_arr.push(<button onClick = {() => setclothescolour(props.imgsrc)} style = {{backgroundColor: props.color}} 
        className = "actualbuttons"> test </button>)
   }

   const [clothescolour, setclothescolour] = useState(props.imginit)

    return(
     <div className = "itemcontainer">
        <div className = "clothesimage"> 
            <img src = {props.image} alt = {props.alt}/>
        </div>
        <div className = "colourbuttons">
           
            
        </div>
        <p className = "clothesdescription"> {props.description}  </p> 
        
    </div>
    )
}

export default Item