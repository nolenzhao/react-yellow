

import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Sizingchart from './Sizingchart'
import arrowback from './assets/images/arrowback.png'
import arrowforward from './assets/images/arrowforward.png'
import React from 'react'
import paypal from './assets/images/paypal.png'
const Item = (props) =>
{ 

    const [item_data, setItem_data] = useState({})

    useEffect(() =>{
        fetch(props.item_endpoint)
        .then(raw => raw.json())
        .then(result => {
            setItem_data(result);
        })
        
    },[])
  
    let num_images = item_data.img_url.size();

    let image_arr = [props.img1, props.img2, props.img3, props.img4, props.img5, props.img6, props.img7, props.img8, props.img9]
    let buttoncolours = [props.buttoncolour1, props.buttoncolour2, props.buttoncolour3, props.buttoncolour4, props.buttoncolour5];
    let buttonlinks = [props.buttonlink1, props.buttonlink2, props.buttonlink3, props.buttonlink4, props.buttonlink5];
    let colour_desc_arr = [props.desc1, props.desc2, props.desc3, props.desc4, props.desc5]
    let button_arr = [];
    let button_num = props.button_num;
   for(let i = 0; i < button_num; i++)
   {
        button_arr.push(<button onClick = {() =>setbothcolours(i)} style = {{backgroundColor: buttoncolours[i]}} 
        className = "actualbuttons"> </button>)
   }

   const [clothescolour, setclothescolour] = useState(props.imginit)
   const [count, setcount] = useState(0)
   const [colourdescription, setcolourdescription] = useState(props.descinit)
      
const imagechange = test_num =>
{
    if(test_num>=0)
    {
    
        setclothescolour(image_arr[test_num%num_images]);
        setcount(test_num);
        setcolourdescription(<br/>);
    }
  
}
const setbothcolours = index =>{
    setclothescolour(buttonlinks[index])
    setcolourdescription(colour_desc_arr[index])
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
        <div className = "name"> 
        <h4> {props.name} </h4>
        </div>
       
        <h5 className = "colourdescription"> {colourdescription}</h5>
        <div className = "paylink"> 
         <a href = "#" > <img src = {paypal}/> </a>
        </div>
        <p className = "clothesdescription"> {props.description} </p> 
        <Link to = "/Sizingchart"> <h6 className = "sizingh6"> Sizing Information </h6> </Link>


        <Routes> 
            <Route exact path = '/Sizingchart' element = {<Sizingchart/>}></Route>
        </Routes> 
    </div>
    )

    
}

export default Item