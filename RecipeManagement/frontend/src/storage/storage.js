import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeSlice";



export const storage = configureStore({
  reducer:{
    recipeReducer
  }
})