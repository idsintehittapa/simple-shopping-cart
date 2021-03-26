import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'

export const CartProducts = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <>
      <li className="products__cart">
        <div className="products__cart-grid">
          <p className="products__cart__name-title">{product.name} </p>
          <div className="products__cart-quantity">
            <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
            <span>{product.quantity}</span>
            <button type="button" onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
          </div>
          <div className="products__cart-price">
            <p className="products__cart__price-text">{product.unit}</p>
            <p className="products__cart__price-text">{product.price}</p>
          </div>
        </div>
      </li>
    </>
  )
}