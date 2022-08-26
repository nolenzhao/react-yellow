import Titlecard from './Titlecard';
import {useLocation} from 'react-router-dom';
import {useState, useEffect, useRef} from 'react'
import arrowleft from './assets/images/arrow-left-solid.png'
import arrowright from './assets/images/arrow-right-solid.png'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Sizingchart from './Sizingchart'



const IndividualItemPage = () =>{

    

    
    const location = useLocation();
 
    const {item_data} = location.state
    const {imgs} = location.state;
    const {num_imgs} = location.state
    const {num_buttons} = location.state
    const {item_colours} = location.state
    const {colour_codes} = location.state
    const {num_details} = location.state
    const {details} = location.state
    const {sizes} = location.state
    const {num_size_buttons} = location.state
    const {item_name} = location.state
    const {item_price} = location.state
    const [clothes_colour, set_clothes_colour] = useState([imgs[0]]);
    const [colour_text, set_colour_text] = useState(item_colours[0]);
    const [count, setCount] = useState(0);
    const [alert, set_alert] = useState('alert_off')
    const [cartadded, setcartadded] = useState('cartdisappear')
// Options to set an object in the shopping cart 
    const [user_colour, set_user_colour] = useState('')
    const [user_quant, set_user_quant] = useState(1);
    const [user_size,set_user_size] = useState('');
    const [user_img, set_user_img] = useState('')
    const user_item = item_data.item_id;




    // set image after clicking arrow
    const imagechange = the_count =>{
        if(the_count >= 0)
        {
            set_clothes_colour(imgs[the_count%num_imgs]);
            setCount(the_count); 
            set_colour_text(<br/>);
        }
    }

    // set image and text of colour after clicking buttons
    const setbothcolours = index =>{
        set_clothes_colour(imgs[index % num_imgs]);
        set_colour_text(item_colours[index]);
        set_user_colour(item_colours[index])
        set_user_img(imgs[index % num_imgs])
        set_alert('alert_off')
    }
    
 
    let button_arr = [];
    for(let i = 0; i < num_buttons; i++)
    {
        button_arr.push(<button onClick = {() =>setbothcolours(i)} style = {{backgroundColor: colour_codes[i]}} 
        className = "actualbuttons"> </button>)
    }

    let details_arr = [];
    for(let i = 0; i < num_details; i++)
    {
        details_arr.push(<li> {details[i]} </li>)
    }

    const temp_cart = useRef([])


   useEffect(() =>{
    fetch('https://yellow-website-server.herokuapp.com/shoppingcart',{
        credentials: 'include'
    })
    .then(raw => raw.json())
    .then(result => {
        temp_cart.current = result.message; 
    })
},[])

    const cartdivdisappear = () =>{
        setcartadded('cartdisappear')
    }
    const add_cart = id =>{
        setcartadded('cartappear')

        setTimeout(cartdivdisappear, 5000);
        if(user_colour !== '' && user_size !== '')
        {
            temp_cart.current.push({
                item_name: item_name,
                user_item_id: user_item,
                user_size: user_size,
                user_colour: user_colour,
                user_quant: user_quant,
                user_img: user_img,
                item_price: item_price,
            });
            
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
            console.log(temp_cart.current);
        }
       else{
            set_alert('alert_on')
       }

    }


    const handleChange = e =>{
        set_user_quant(e.target.value);
    }

    let size_button_arr = [];

    const user_set_size = (size) =>{
        set_alert('alert_off')
        set_user_size(size)
    }
  
    sizes.forEach(size =>{
        size_button_arr.push(<button onClick = {() => user_set_size(size)} className = 'size_buttons'>
         <strong>{size}</strong> </button>)
    })


    




    return(

        <div className='content'>
            <Titlecard title = {item_data.item_type }/>
            <div className = 'ind_item_content'>
                <div className = "item_slideshow">
                    <img  id = 'ind_img' src = {clothes_colour} alt = {item_data.alt_text}/>
                    <div className = "ind_arrows">
                        <div className = 'ind_back_arrow'>
                        <img className = 'arrowimg' onClick = {()=> imagechange(count-1)} src = {arrowleft}/>
                       
                        </div>
                        <div className = 'ind_front_arrow'>
                        <img  onClick = {() =>imagechange(count+1)}  src = {arrowright}/>
                        </div>
                    
                    </div>
                </div>

                <div className = 'ind_item_right'>
                    <div className='name'>
                    <h2> {item_data.item_name}</h2>
                    </div>
                    <br/>
                    <div className = 'item_price'>
                      <h3 >${item_data.price}</h3>
                    </div>
                  
                    <br/>
                    
                    <div className = 'item_colour'>
                        <h3> {colour_text}</h3>
                    </div>
                    <div className='colourbuttons'>
                        <div>
                        {button_arr}
                        </div>         

                    </div>
                    <p className = {alert}> Please Select a Colour and/or Size. </p>
                    <div className = 'user_cart_options'>
                    <div className = 'size_button_container'>
                        {size_button_arr}
                     </div>
                    <div className = 'quant_selector' >
                        <h3 id = 'quant_header'> Quantity </h3>
                            <select onChange={handleChange}> 
                                <option selected value={1}> 1 </option>
                                <option value = {2}> 2</option>
                                <option value = {3} > 3 </option>
                                <option value = {4}> 4</option>
                                <option value = {5} > 5 </option>
                            </select>
                     </div>
                    
                 
                    </div>
                   
                    <div className = 'cartadd'>
                        
                        <div onClick = {() => add_cart(item_data.item_id)} className = 'innercartadd'>
                        Add To Cart
                        </div>
                        
                   
                    </div>
                    <div className = 'cartaddedbox'>
                    <div className = {cartadded}>
                        <h5>  Item added to cart! </h5>
                     </div>
                    </div>
                 
                  
                    <div className='indclothesdescription'>
                        <h4> Description</h4>
                        <br/>
                        {item_data.item_description}
                    </div>

                    <br/>
                    <br/>
                    <div className = 'productdetails'>
                        <h4> Product Details</h4>
                        <br/>
                        <ul>
                            {details_arr}
                        </ul>
                    </div>

                    <div className = 'size_redirect'>
                        <Link to = "/SizingChart"> <h5 className = 'sizingh6'> Sizing Information</h5> </Link>
                    </div>
                </div>
            </div>
          
        </div>
     
      

     
    )
}

export default IndividualItemPage