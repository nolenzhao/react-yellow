import {useEffect, useState, useRef} from 'react';
import  Titlecard from './Titlecard';
import CartItem from './CartItem';
import Plusicon from './assets/images/plus-solid.svg'
import Minusicon from './assets/images/minus-solid.svg'
import Paypal from './assets/images/paypal-icon.svg'

const  ShoppingCart = () =>{

const [obj_arr, set_obj_arr] = useState([])
const [user_item_id, set_user_item_id] = useState([])
const [user_colour, set_user_colour] = useState([])
const [user_size, set_user_size] = useState([])
const [user_price, set_user_price] = useState([])
const [user_quant, set_user_quant] = useState([])
const [item_imgs, set_item_imgs] = useState([])
const [user_colour_number, set_user_colour_number] = useState([])
const [item_names, set_item_names] = useState([])
const [num_items, set_num_items] = useState(0);
const [total_price, set_total_price] = useState(0);
const [cartstatus, setcartstatus] = useState('emptycart')
const [shippingcost, setshippingcost] = useState(0);
const [flag1, setflag1] = useState(false);
const temp_cart = useRef([])

useEffect(() =>{
    fetch('https://yellow-website-server.herokuapp.com/shoppingcart',{
        credentials: 'include'
    })
    .then(raw => raw.json())
    .then(result =>{
        set_obj_arr(result.message)
        set_num_items(result.message.length);
    })
},[temp_cart.current])

useEffect(() =>{
    console.log(obj_arr);
    obj_arr.forEach(obj =>{
        set_user_item_id(current => [...current,obj.user_item_id]);
        set_user_colour(current =>[...current, obj.user_colour]);
        set_user_size(current => [...current,obj.user_size]);
        set_user_quant(current => [...current,obj.user_quant]);
        set_user_colour_number(current => [...current, obj.user_colour_number])
        set_user_price(current => [...current, obj.item_price])
        set_item_imgs(current => [...current, obj.user_img])
        set_item_names(current => [...current, obj.item_name])
        if(obj_arr !== [])
        {
            setcartstatus('notemptycart');
            setshippingcost(15);
        }
    })

},[obj_arr])

useEffect(() =>{
    let temp_price = 0;
    for(let i = 0; i < user_price.length; i++)
    {
        temp_price += user_price[i];
    }
    set_total_price(temp_price);

}, [user_price])





const quantchange = (id, change) =>{
    let temp_quant_arr = user_quant
    if(change === 'minus' && user_quant[id] > 1)
    {
        temp_quant_arr[id]--;
    }
    else if(change === 'plus' && user_quant[id] < 5)
    {
        temp_quant_arr[id]++;      
    }
    set_user_quant(temp_quant_arr);
    console.log(user_quant[id])
}

let cart_arr = [];

for(let i = 0; i < num_items; i++)
    {
        cart_arr.push(
        <div className = 'cartitem'>
        
        <div className='cart_obj_pic'>
            <img src = {item_imgs[i]}/>
        </div>
    
        <div className = 'cart_obj_name'>
         <h4> {item_names[i]} </h4>
         <p> Colour: {user_colour[i]}</p>
         <p> Size: {user_size[i]}</p>
        </div>
        
        <div className = 'cart_quant'>
            <h4> Quantity </h4> 
            <div className = 'quantchanger'>
            <img onClick = {() =>quantchange(i, 'minus')} src = {Minusicon}/>
            <span> {user_quant[i]} </span>
            <img onClick = {() =>quantchange(i, 'plus')} src = {Plusicon}/>
            </div>
        </div>
    
        <div className = 'cart_price'>
            <h4> Item Price </h4>
            <h4 id = 'cart_price_displayed'> ${user_price[i]}</h4>
        </div>
    
        <div className= 'cart_remove'>
            <h6 onClick = {() =>removeItem(i)}> <u> Remove </u></h6>
        </div>
    
        </div>)
    }


const clear_cart = () =>{
    fetch('https://yellow-website-server.herokuapp.com/cartpost',{
        credentials: 'include',
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: []
        })
    })
    console.log('Cart Cleared');
}

const wait_reload = () =>{
    window.location.reload(false)
}

const removeItem = (index) =>{
   
    temp_cart.current = obj_arr;
    temp_cart.current.splice(index,1);
    fetch('https://yellow-website-server.herokuapp.com/cartpost',{
        credentials: 'include',
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: temp_cart.current
        })
    })
    temp_cart.current = []
    setTimeout(wait_reload, 500)  
}



return (
    <div className='content'>
        <Titlecard title = 'Cart'/>
        <div className = 'cartcontainer'>
            <div className = 'cartleft'>
            {cart_arr}
            <div className = {cartstatus}>
                <h1>There are no items in your cart.</h1>
            </div>
            </div>

            <div className = 'cartpay'>
            <h2> Order Summary</h2>
            <div className = 'cartamount'>
            <h4> Subtotal</h4>
            <h4>  ${total_price} </h4>
            </div>
            <div className = 'cartshipping'>
                <h4>Estimated Shipping</h4>
                <h4> ${shippingcost.toFixed(2)} </h4> 
            </div>

            <div className = 'cart_tax'>
             <h4>Estimated Tax </h4>
             <h4> ${(total_price * 0.12).toFixed(2)} </h4>
             </div>

            <div className = 'cart_total'>
                <h3> Total</h3>
                <h3> ${(total_price * 1.12 + shippingcost).toFixed(2)}</h3>
            </div>
            
            <div className = 'cartpaypal'>
                <div className='cartpaypaltext'>
                <p> <em>Complete Purchase Below with PayPal </em></p>
                </div>
               
                <div className = 'cartpaypalbuttonbox'>
                <div className = 'cartpaypalbutton'>
                <a  target = '_blank' href = "https://www.paypal.com/ca/for-you/account/create-account?kid=p55297049571&gclid=CjwKCAjwu5yYBhAjEiwAKXk_eGvPEijU8CB_X31M3Esv4lTy0csdlKikFhVlZ-PkTwcejMeOrKiSDRoCOZsQAvD_BwE&gclsrc=aw.ds"> 
                <img src = {Paypal} />
                </a>
               
                </div>
                </div>
               
              
            </div>
            </div>
        </div>
       
      
    
    </div>
)

}



export default ShoppingCart
/*
All the code below works up until the final useEffect hook where it crashed. 
How it is different from the final useEffect hook above is unknown



const [obj, setObj] = useState({})
const [quant, setQuant] = useState(0);
const [size, setSize] = useState('')
const [colour, setColour] = useState('')
const [id, setId] = useState(0);
const [image, setImage] = useState('');

useEffect(() =>{
    fetch('https://yellow-website-server.herokuapp.com/shoppingcart',{
        credentials: 'include'
    })
    .then(raw => raw.json())
    .then(result =>{
        console.log(result.message[0])
        setObj(result.message[0])
    })
},[])


useEffect(() =>{
    setQuant(obj.user_quant)
    setSize(obj.user_size)
    setColour(obj.user_colour)
    setId(obj.user_item_id)
},[obj])


useEffect(() =>{
    fetch('https://yellow-website-server.herokuapp.com/items/' + id,{
        credentials: 'include'
    })
    .then(raw => raw.json())
    .then(result =>{
        setImage(result.img_url[0])
    })
},[id])
*/
