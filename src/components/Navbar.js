import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Cart } from './Cart'
import { CartProducts } from './CartProducts'
import './Navbar.css'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const products = useSelector((store) => store.cart.items)
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  return (
    <header className="navbar__wrapper">
      <Cart open={open} setOpen={setOpen} />
      {open && (
        <div className="cart__menu">
          <ul className="cart__items">
            {products.map((product) => (
              <CartProducts key={product.id} product={product} />
            ))}
          </ul>
          <div className="cart__sum">
            <p>Total</p>
            <p>£{totalPrice}</p>
          </div>
        </div>
      )}
    </header>
  )
}
