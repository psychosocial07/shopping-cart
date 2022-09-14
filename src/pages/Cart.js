import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
function Cart({cart,setCart}) {
  
  const [total,setTotal] = useState()

  const displaycart = cart.map((val)=>{
    const {id,image,title,price,quantity} = val;
    return (
      <div className="cartproducts">
        <div className="cartname">
          <CloseIcon onClick={ () =>{
          const items = cart.filter((item)=>{
            if(item.id!=id)
            {
              return item;
            }
          })
          setCart(items)}}></CloseIcon>
          <img style={{ padding:"10px",height:"100px" , width:"100px" }}src={image}></img>
          <p>{title}</p>
        </div>
        <p>${price}</p>
        <div className='quantity'>
          <div onClick={()=>{
            const items = cart.filter((item)=>{
              if(item.id==id)
              {
                item.quantity=eval(item.quantity+"+1");
                return item;
              }
              else
              {
                return item;
              }
              
            })
            setCart(items);
          }}>+</div>
          <div>{quantity}</div>
          <div onClick={()=>{
            const items = cart.filter((item)=>{
              if(item.id==id && item.quantity>"0")
              {
                item.quantity=eval(item.quantity+"-1");
                return item;
              }
              else
              {
                return item;
              }
              
            })
            setCart(items);
          }}>-</div>
        </div>
        <p>${eval(quantity*price)}</p>
      </div>
    )
    
  })
  
  useEffect(()=>{
    let total=0;
    cart.forEach(element => {
      total+=parseInt(eval(element.price*element.quantity))
    })
    setTotal(`${total}`)
  },[cart])

  return (
    <div className='cart'>
      <div>
        <div className='carttitle'>
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        {displaycart}
      </div>
      <div className='carttotal'>
        <h1 >Cart Totals</h1>
        <div className='subtotal'>
          <p>Sub Total</p>
          <p>${total}</p>
        </div>
        <div className='subtotal'>
          <p><b>Total</b></p>
          <p><b>${total}</b></p>
        </div>
        <Link to="/end">
        <button className='submitbutton'>proceeed to checkout</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart