import {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import Sizingchart from './Sizingchart'
import paypal from './assets/images/paypal.png'
import IndividualItemPage from './IndividualItemPage';
import arrowleft from './assets/images/arrow-left-solid.png'
import arrowright from './assets/images/arrow-right-solid.png'

const NewItem = (props) =>{

    let navigate = useNavigate();

    const route_click = () =>{
        navigate('/' + props.end_page)

    }
    //general item info
    const [item_data, set_item_data] = useState({});
    //img_url array
    const [imgs, setImgs] = useState([]);
    const [count, setCount] = useState(0);
    const [num_imgs, set_num_imgs] = useState(0);
    const [num_buttons, set_num_buttons] = useState(1);
    const [num_colours,set_num_colours] = useState(1);  
    //populates array w/ db colour names 
    const [item_colours, set_item_colours] = useState([]);
    //hex codes 
    const [colour_codes, set_colour_codes] = useState([]);
    // set the actual img 
    const [clothes_colour, set_clothes_colour] = useState([imgs[0]])
    //set the actual colour text
    const [colour_text, set_colour_text] = useState(item_colours[0]);
    // set  number of detail bullet points 
    const [details, set_details] = useState([]);
    const [num_details, set_num_details] = useState(0);
    const [sizes, set_sizes] = useState([])
    const [num_size_buttons, set_num_size_buttons] = useState(0); 
    const [item_price, set_item_price] = useState(0);
    useEffect(() =>{
        fetch(props.item_url)
        .then(raw =>raw.json())
        .then(result => {
      
            set_item_data(result);
            setImgs(result.img_url);
            set_num_imgs(result.img_url.length);
            set_item_colours(result.item_colours);
            set_colour_codes(result.colour_codes);
            set_num_buttons(result.item_colours.length);
            set_sizes(result.sizes);
            set_item_price(result.price);
            set_num_size_buttons(result.sizes.length);
            set_details(result.details);
            set_num_details(result.details.length);
   
        
        })
    },[])

    useEffect(() =>{
        set_colour_text(item_colours[0])
    },[item_colours])

    
    useEffect(() =>{
        set_clothes_colour(imgs[0])
    },[imgs])
    
    const imagechange = the_count =>{
        if(the_count >= 0)
        {
            set_clothes_colour(imgs[the_count%num_imgs]);
            setCount(the_count); 
            set_colour_text(<br/>);
        }
    }
    
    let button_arr = [];
    for(let i = 0; i < num_buttons; i++)
    {
        button_arr.push(<button onClick = {() =>setbothcolours(i)} style = {{backgroundColor: colour_codes[i]}} 
        className = "actualbuttons"> </button>)
    }

   const setbothcolours = index =>{
        set_clothes_colour(imgs[index%num_imgs]);
        set_colour_text(item_colours[index]);
        console.log(index%num_imgs);
   }

   const temp_cart = useRef([])

   useEffect(() =>{
       fetch('https://yellow-website-server.herokuapp.com/shoppingcart',{
           credentials: 'include'
       })
       .then(raw => raw.json())
       .then(result => {
           console.log(result.message);
           temp_cart.current = result.message; 
       })
   },[])


   const add_cart = id =>{
       temp_cart.current.push(id);
       console.log('added');
       fetch('https://yellow-website-server.herokuapp.com/cartpost',{
           method: 'POST',
           credentials: 'include',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               items: temp_cart.current
           }),
       })
   }
   


    return(

        <div className = "itemcontainer">
        <div className = "clothesimage"> 
        <Link to = "/IndividualItemPage"  state = {{
            item_data: item_data,
            imgs: imgs,
            num_imgs: num_imgs,
            num_buttons: num_buttons,
            item_colours: item_colours,
            colour_codes: colour_codes,
            num_details: num_details,
            details: details,
            sizes: sizes,   
            num_size_buttons: num_size_buttons,
            item_name: item_data.item_name,
            item_price: item_price,
        }}>
        <img src = {clothes_colour} alt = {item_data.alt_text}/>
        </Link>
          
        </div> 
        <div className = "arrowicons">
        <div className = "backarrow">
            <img onClick = {()=> imagechange(count-1)} src = {arrowleft}/>
        </div>  

        <div className =  "frontarrow">
        <img onClick = {()=>imagechange(count+1)}  src = {arrowright}/>
        </div>
    
        </div>
 
        
        <div className = "colourbuttons">
           {button_arr}
        </div>
        <div className = "name"> 
        <h4> {item_data.item_name} </h4>
        </div>
       
        <h5 className = "colourdescription"> {colour_text}</h5>
        
        <p className = "clothesdescription"> {item_data.item_description} </p> 

        <Link to = "/Sizingchart"> <h6 className = "sizingh6"> Sizing Information </h6> </Link>
        
        <Routes> 
            <Route exact path = '/Sizingchart' element = {<Sizingchart/>}></Route>
            <Route exact path = '/IndividualItemPage'  element = {<IndividualItemPage message = 'hi'/>}></Route>
        </Routes> 
    </div>
    )
}


export default NewItem