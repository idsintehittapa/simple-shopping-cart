import { createSlice } from '@reduxjs/toolkit'

import { ui } from './ui'

export const products = createSlice({
  name: 'products',
  initialState: {
    all: []
  },
  reducers: {
    setProducts: (store, action) => {
      const { allProducts } = action.payload
      store.all = allProducts
    }
  }
})

// thunk
// I created a thunk so I could also implement a loading indicator for UX/UI purposes
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://falconx-development.coffee4tech.net/products/public?country=GB')
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((json) => {
        dispatch(products.actions.setProducts({ allProducts: json.docs }))
        dispatch(ui.actions.setLoading(false))
      })
  }
}