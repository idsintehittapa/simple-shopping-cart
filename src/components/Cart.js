import React from 'react'
import './Navbar.css'

export const Cart = ({ open, setOpen }) => {

  return (
    <header>
      <div>
        <button className="cart__button" type="button">
          <span className="cart__emoji" role="img" aria-label="cart" open={open} onClick={() => setOpen(!open)}>🛒</span>
        </button>
      </div>
    </header>
  )
}
