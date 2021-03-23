
import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'

import './Products.css'

export const Product = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div className="products__card">
      <h1>{product.name}</h1>
      <p>{product.h1}</p>
      <p>{product.h2}</p>
      <p>{product.h3}</p>
      <div>
        <p>{product.price}</p>
        <p>{product.unit}</p>
        <button
          type="button"
          onClick={() => dispatch(cart.actions.addItem(product))}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

