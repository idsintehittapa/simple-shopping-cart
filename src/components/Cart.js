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
        // as I am unsure what logic we want here, it's now:
        // we check if the cart is closed before disabling it, otherwise it can't be closed
        disabled={numItems === 0 && !open}>
        <ul className="cart__emoji-wrapper">
          <span className="cart__emoji" role="img" aria-label="cart">🛒</span>
          <span className={
            numItems > 0
              ? 'cart__emoji-items'
              : 'cart__emoji-no-items'
          }><p className="cart__emoji-numItems">{numItems}</p>
          </span>
        </ul>
      </button>
    </div>
  )
}
