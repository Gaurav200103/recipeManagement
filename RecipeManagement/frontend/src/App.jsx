import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/signup'
import Login from './components/Login'
import Home from './components/Home'
import CreateRecipe from './components/CreateRecipe'
import RecipeDetails from './components/RecipeDetails'
import MyRecipe from './components/MyRecipe'
import MyRecipeDetails from './components/MyRecipeDetails'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/createRecipe' element={<CreateRecipe />} />
      <Route path='/recipeDetails' element={<RecipeDetails />} />
      <Route path='/myRecipe' element={<MyRecipe />} />
      <Route path="/myRecipeDetails" element={<MyRecipeDetails />} />
    </Routes>
  )
}

export default App
