import { configureStore } from '@reduxjs/toolkit'
import { trackReducer } from "./track/reducer";



 const store = configureStore({
    reducer: {
      track:trackReducer
    }
  })
export default store;
