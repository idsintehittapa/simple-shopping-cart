
import React from 'react'

import './Products.css'

export const Product = ({ product }) => {

  return (
    <div className="products__card">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.marks}</p>
      <div>
        <p>{product.price}</p>
        <p>{product.unit}</p>
        <button type="button">Add to cart</button>
      </div>
    </div>
  )
}

