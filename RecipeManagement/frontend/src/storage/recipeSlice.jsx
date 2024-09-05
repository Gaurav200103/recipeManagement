import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import MyRecipe from "../components/MyRecipe";

const initialState = {
  recipeList: [],
  currRecipe: {},
  myRecipes: []
}

export const getRecipes = createAsyncThunk("recipeCreation", async ()=>{
  const res = await axios.get("http://localhost:3000/recipes");
  console.log(res);
  return res.data;
})

export const getMyRecipes = createAsyncThunk("myRecipes", async ()=>{
  const res = await axios.get("http://localhost:3000/myRecipes", {
    headers:{
      Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJncGltcGxla2FyQGdtYWlsLmNvbSIsImlhdCI6MTcyNTQ2MjAyMX0.SofIzpXfvZXBV9qpdxUR72ptrXugQNSCHO1jejtXioE"
    }
  });
  console.log(res.data);
  return res.data;
})

export const addRecipe = createAsyncThunk("createRecipe", async (recipe)=>{
  const res = await axios.post("http://localhost:3000/addRecipe", recipe, {
    headers:{
      Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJncGltcGxla2FyQGdtYWlsLmNvbSIsImlhdCI6MTcyNTQ2MjAyMX0.SofIzpXfvZXBV9qpdxUR72ptrXugQNSCHO1jejtXioE"
    }
  })

  return res.data;
})

const recipeSlice = createSlice({
  name:"recipe",
  initialState,
  reducers:{
    addSingleRecipe: (state, action)=>{
      const recipe = action.payload;
      localStorage.setItem("recipe", JSON.stringify(recipe));
    },
    getSingleRecipe: (state, action)=>{
      const recipe = JSON.parse(localStorage.getItem("recipe"));
      state.currRecipe = recipe;
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(getRecipes.fulfilled, (state, action)=>{
      state.recipeList = action.payload.recipes;
    }),
    builder.addCase(addRecipe.fulfilled, (state, action)=>{
      console.log(action.payload.message);
    }),
    builder.addCase(getMyRecipes.fulfilled, (state, action)=>{
      state.myRecipes = action.payload.recipes;
      
    })
  }
})

export default recipeSlice.reducer;
export const {addSingleRecipe, getSingleRecipe} = recipeSlice.actions;