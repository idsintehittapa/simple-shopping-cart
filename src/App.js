import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { products } from './reducers/products'
import { Products } from './components/Products'

// for now only the products reducer
const reducer = combineReducers({
  products: products.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Products />
    </Provider>
  )
}
