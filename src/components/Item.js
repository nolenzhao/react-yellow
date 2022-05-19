

import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Sizingchart from './Sizingchart'
import arrowback from './assets/images/arrowback.png'
import arrowforward from './assets/images/arrowforward.png'
import React from 'react'
const Item = (props) =>
{ 
    let num_images = props.num_images;

    let image_arr = [props.img1, props.img2, props.img3, props.img4, props.img5, props.img6, props.img7, props.img8, props.img9]
    let buttoncolours = [props.buttoncolour1, props.buttoncolour2, props.buttoncolour3, props.buttoncolour4, props.buttoncolour5];
    let buttonlinks = [props.buttonlink1, props.buttonlink2, props.buttonlink3, props.buttonlink4, props.buttonlink5];
    let button_arr = [];
    let button_num = props.button_num;
   for(let i = 0; i < button_num; i++)
   {
        button_arr.push(<button onClick = {() =>setclothescolour(buttonlinks[i])} style = {{backgroundColor: buttoncolours[i]}} 
        className = "actualbuttons"> </button>)
   }

   const [clothescolour, setclothescolour] = useState(props.imginit)
   const [count, setcount] = useState(0)

      
const imagechange = test_num =>
{
    if(test_num>=0)
    {
    
        setclothescolour(image_arr[test_num%num_images]);
        setcount(test_num);
    }
  
}
   

  
    
    return(
     <div className = "itemcontainer">
        <div className = "clothesimage"> 
            <img src = {clothescolour} alt = {props.alt}/>
        </div>
        <div className = "arrowicons">
        <div className = "backarrow">
            <img onClick = {()=> imagechange(count-1)} src = {arrowback}/>
        </div>  
        <div className =  "frontarrow">
        <img onClick = {()=>imagechange(count+1)}  src = {arrowforward}/>
        </div>
    
        </div>
 
        
        <div className = "colourbuttons">
           {button_arr}
        </div>
        
        <h3 className = "itemname"> {props.name} </h3>
        <p className = "clothesdescription"> {props.description} </p> 
        <Link to = "/Sizingchart"> <h6> Sizing Information </h6> </Link>


        <Routes> 
            <Route exact path = '/Sizingchart' element = {<Sizingchart/>}></Route>
        </Routes> 
    </div>
    )

    
}

export default Item