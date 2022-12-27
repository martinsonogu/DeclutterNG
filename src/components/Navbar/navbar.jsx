import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './navbar.css'
import {ShopContext} from '../../context/shop-context'


const Navbar = () => {
  const {cartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className="links">
        <Link to="/">Shop</Link>
        <div className="notificationContainer">
        <Link to="/Cart">
          <ShoppingCart size={30} className="cartMain"/>
        </Link>
        <div className="notificationIcon">
          <p className="counter">0</p>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar