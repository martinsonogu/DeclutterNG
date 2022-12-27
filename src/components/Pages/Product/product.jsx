import React, { useContext } from 'react'
import {ShopContext} from '../../../context/shop-context'

const Product = (props) => {
  const {addToCart} = useContext(ShopContext )
  const {id, productName, price, image}= props.data
  return (
    <div className='product'>
      <img src={image } alt="" />
      <div className='description'>
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  )
}

export default Product