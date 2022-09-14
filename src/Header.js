import React,{useRef,useState} from 'react'
import '../src/App.css'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {Link} from 'react-router-dom'

function Header(props) {

    const categoryRef = useRef(null);
    const orderRef = useRef(null);
    const inputRef = useRef(null);

    const changeCategory = () =>{
        props.setCategory(categoryRef.current.value);
    }

    const changeOrder = () =>{
        props.setOrder(orderRef.current.value);
    }

    const changeKeyword = () =>{
        props.setKeyword(inputRef.current.value);
    }

    const resetValue = () =>{
        categoryRef.current.value="";
        orderRef.current.value="";
        props.setCategory(categoryRef.current.value);
        props.setOrder(orderRef.current.value);
    }

    
    
  return (
    <div  className='header'>
        <select ref={categoryRef} onChange={changeCategory} >
            <option value="">--Select--</option>
            <option value="1">Dress</option>
            <option value="2">Watch</option>
            <option value="3">Furniture</option>
            <option value="4">Shoes</option>
        </select>
        <select ref={orderRef} onChange={changeOrder}>
            <option value="">--Select--</option>
            <option value="101">Greater than $100</option>
            <option value="100">Less than $100</option>
        </select>
        <div className='reset' onClick={resetValue}>
            <RestartAltIcon fontSize="large" style={{ color: "blue" }}/>
            <h3 style={{ color: "blue" }}>Reset</h3>
        </div>
        <p className='searchtext'>Search:</p>
        <input ref={inputRef} onChange={changeKeyword} type="text"></input>
        <Link to="/cart">
        <button className='addtocart' >Add to Cart</button>
         </Link>
    </div>
  )
}

export default Header