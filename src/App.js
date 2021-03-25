import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { ui } from 'reducers/ui'
import { products } from './reducers/products'
import { cart } from './reducers/cart'
import { LoadingIndicator } from './components/LoadingIndicator'
import { Products } from './components/Products'
import { Navbar } from './components/Navbar'

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer,
  cart: cart.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <LoadingIndicator />
      <Products />
    </Provider>
  )
}
