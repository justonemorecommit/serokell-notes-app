import { configureStore } from '@reduxjs/toolkit'

import noteReducer from './slices/noteSlice'

const reducer = {
  notesReducer: noteReducer
}

const store = configureStore({
  reducer,
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
