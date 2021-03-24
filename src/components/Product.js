
import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'

import './Products.css'

export const Product = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div className="products__card-wrapper">
      <div className="products__card-content">
        <h1>{product.name}</h1>
        <p>{product.h1}</p>
        <p>{product.h2}</p>
        <p>{product.h3}</p>
        <div className="products__card-grid">
          <span>{product.price} {product.unit}</span>
          <button
            type="button"
            onClick={() => dispatch(cart.actions.addItem(product))}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

