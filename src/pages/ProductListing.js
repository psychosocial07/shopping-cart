import React,{useEffect,useState} from 'react'
import Header from '../Header'
import Titles from '../Titles'
import axios from 'axios'
import Product from '../Product';
function ProductListing({cart,setCart}) {

    const [products,setProducts] = useState([]);
    
    const [category,setCategory] = useState("");

    const [dispro,setDispro] = useState([]);

    const [order,setOrder] = useState("");

    

    const [keyword,setKeyword] = useState("");

    let count=0;

    useEffect (() =>{
      axios 
      .get(`https://api.escuelajs.co/api/v1/products`)
      .then(res=>{
        setProducts(res.data);
        setDispro(res.data);
        console.log(res.data);
       })
      .catch(err => console.log("Err ",err))
    },[])

    useEffect (()=>{
      const items = products.filter((val)=>{
        if(category=="")
        {
          if(order=="")
          {
            return val;
          }
          else if(order=="101")
          {
            if(val.price>"100")
            {
              return val;
            }
          }
          else if(order=="100")
          {
            if(val.price<"100")
            {
              return val;
            }
          }
        }
        else if(category==val.category.id)
        {
          if(order=="")
          {
            return val;
          }
          else if(order=="101")
          {
            if(val.price>"100")
            {
              return val;
            }
          }
          else if(order=="100")
          {
            if(val.price<"100")
            {
              return val;
            }
          }
        }
        
        
      })
      setDispro(items);
    },[category,order])


    const displayData = dispro.filter((val)=>{
      if(keyword=="")
      {return val}
      else if(val.title.toLowerCase().includes(keyword.toLowerCase()))
      {
        return val
      }
    }).map((product) =>{
      const {id,title,images,price} = product;
      return (
          <Product cart={cart} setCart={setCart} image={images[0]} price={price} id={id} key ={id} title={title}/>
        )
      });
    return (
    <div>
      <Header setKeyword={setKeyword} setCategory={setCategory} setOrder={setOrder}></Header>
      <Titles></Titles>
      {displayData}
    </div>
  )
}

export default ProductListing