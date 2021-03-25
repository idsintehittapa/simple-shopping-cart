import React from 'react'
import { useSelector } from 'react-redux'

export const Cart = ({ open, setOpen }) => {
  const numItems = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + item.quantity), 0)
  ))

  return (
    <div>
      <button
        className="cart__button"
        type="button"
        open={open}
        onClick={() => setOpen(!open)}
        disabled={numItems === 0}>
        <ul>
          <span className="cart__emoji" role="img" aria-label="cart">🛒 <span className="cart__emoji-items">{numItems}</span></span>
        </ul>
      </button>
    </div>
  )
}
