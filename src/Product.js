import React, { useRef,useState } from 'react'
import './App.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CollectionsOutlined, SettingsApplicationsRounded } from '@material-ui/icons';
function Product (props) {

  const checkRef = useRef(null);
  const quantityRef = useRef(null);

  const addToCart = () =>{
      if(checkRef.current.checked)
      {
        props.setCart([...props.cart,{
          id:props.id,
          image:props.image,
          title:props.title,
          price:props.price,
          quantity:quantityRef.current.value,
        }])
      }
      else
      {
        const items = props.cart.filter((val)=>{
          if(val.id!=props.id)
          {
            return val;
          }
        })
        props.setCart(items);
      }
  }

  
  return (
    <div className='productdisplay'>
        <img style={{ padding:"10px",height:"100px" , width:"100px" }}src={props.image}></img>
        <p>{props.title}</p>
        <p>Default</p>
        <p>In Stock</p>
        <p>${props.price}</p>
        <div className='buy'>
        <input ref={quantityRef} type="text" defaultValue="1" style={{ fontSize:"22px", width:"50px" }}></input>
        <button><ShoppingCartIcon></ShoppingCartIcon></button>
        <input ref={checkRef} onClick={addToCart} type="checkbox"></input>
        </div>
    </div>

  )
}

export default Product