import React from 'react'
import {PRODUCTS} from '../../../Products'
import Product from '../Product/product'
import './shop.css'


const Shop = () => {
  return (
    <div className='shop'>
        <div className='shop_title'>
            <p>"Maximize your property's value with professional declutter services"</p>
        </div>
        <p className='catchy'>Quality products, best Prices.</p>
       <div className='products'>
            {PRODUCTS.map((product) => (
            <Product data={product}/>
            ))}
       </div>
    </div>
  )
}

export default Shop