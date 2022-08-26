import {useState, useEffect} from 'react'

const CartItem = (props) =>{


const [obj, set_obj] = useState({})
const [user_item_id, set_user_item_id] = useState(0)
const [user_colour, set_user_colour] = useState('')
const [user_size, set_user_size] = useState('')
const [user_quant, set_user_quant] = useState(0)
const [item_img, set_item_img] = useState('')


useEffect(() =>{
    fetch('https://yellow-website-server.herokuapp.com/shoppingcart',{
        credentials: 'include'
    })
    .then(raw => raw.json())
    .then(result =>{
         set_obj(result.message[props.item_num])
    })
},[])

useEffect(() =>{
    set_user_item_id(obj.user_item_id)
    set_user_colour(obj.user_colour)
    set_user_size(obj.user_size)
    set_user_quant(obj.user_quant)
},[obj])

useEffect(() =>{
    fetch('https://yellow-website-server.herokuapp.com/items/' + user_item_id,{
        credentials: 'include'
    })
    .then(raw => raw.json())
    .then(result =>{
        set_item_img(result.img_url[0])
    })
},[user_item_id])


    return(
        <div className = 'content'>

            <div className = 'cartitemcontainer'>
                <div className = 'cart_item_img'>
                    
                 this is the quant: {user_quant}
          
                </div>

            </div>

        </div> 

    )
}

export default CartItem