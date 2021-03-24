import React from 'react'
import '../index.css'

export const Cart = ({ open, setOpen }) => {

  return (
    // <header>
      <div>
        <button className="cart__button" type="button">
          <ul><span className="cart__emoji" role="img" aria-label="cart" open={open} onClick={() => setOpen(!open)}>🛒</span></ul>
        </button>
      </div>
    // </header>
  )
}
