import { createSlice } from "@reduxjs/toolkit"

export const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((product) => product.name === action.payload.name)
      if (item) {
        item.count += 1
        item.isSelect = true
      } else {
        state.push({ ...action.payload, count: 1, isSelect: true })
      }
    },
    removeOneToCart: (state, action) => {
      const item = state.find((product) => product.name === action.payload.name)
      if (item) {
        if (item.count > 1) {
          item.count -= 1
        } else {
          return state.filter((product) => product.name !== action.payload.name)
        }
      }
    },
    removeToCart: (state, action) => {
      const item = state.find((product) => product.name === action.payload.name)
      if (item) {
        return state.filter((product) => product.name !== action.payload.name)
      }
    },
    resetOrder: () => {
      return []
    },
  },
})

export const { addToCart, removeOneToCart, removeToCart, resetOrder } =
  productSlice.actions

export default productSlice.reducer
