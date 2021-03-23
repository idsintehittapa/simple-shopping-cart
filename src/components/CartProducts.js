import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cart } from '../reducers/cart'

export const CartProducts = ({ product }) => {
  const dispatch = useDispatch()
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  return (
    <>
      <li className="products__card">
        <div>
          <p>{product.name} </p>
          <p>{product.price}</p>
          <p>{product.unit}</p>
        </div>
        <div>
          <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
          <span className="quantity">x{product.quantity}</span>
          <button type="button" onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
        </div>
      </li>

      <div>
        <p className="quantity">Total</p>
        <p className="quantity">{product.unit}{totalPrice}</p>
      </div>
    </>
  )
}