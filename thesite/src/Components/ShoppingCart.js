import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ShoppingCart = ({items, subtract, addition}) => {

    const [price, setPrice] = useState(0)
    console.log(items)

   

    useEffect(() => {
      setPrice(0)
      items.map(item =>{
        console.log(item)
        setPrice(item.count*item.price +price)
      })
    
      
    }, [items])
    




  return (
    <>
    <div >
      
     <div className='cards'> {items.map(item =>{
      return <div className='card' key={item.id}>  <img src={item.link}></img> {item.title} {item.price} <div className='btns'> <button onClick={()=>{subtract(item)}} >-1</button> <div>{item.count} </div>  <button onClick={()=>addition(item)} >+1</button> </div> </div>
    })}</div>
    
    
    </div>
    <footer className='footer'> 
    <Link to="/shop">
    <button>Return Shop</button>
    </Link>

    <div>Total Price is {price}</div>
    
    <button>Checkout</button>
    
    </footer>
    </>



  )
}


export default ShoppingCart