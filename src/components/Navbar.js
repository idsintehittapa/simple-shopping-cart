import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Cart } from './Cart'
import { CartProducts } from './CartProducts'
import './Navbar.css'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const products = useSelector((store) => store.cart.items)

  return (
    <div className="navbar__wrapper">
      <Cart open={open} setOpen={setOpen} />
      {open && (
        <div className="navbar__menu">
          <ul className="items">
            {products.map((product) => (
              <CartProducts key={product.id} product={product} />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
