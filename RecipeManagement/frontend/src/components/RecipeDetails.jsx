import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleRecipe } from '../storage/recipeSlice';

const RecipeDetails = () => {
  const {currRecipe} = useSelector(state => state.recipeReducer);
  const dispatch = useDispatch();

  console.log(currRecipe);
  useEffect(()=>{
    dispatch(getSingleRecipe());
  },[])
  return (
    <div className='flex justify-around'>
      <img className='h-96 w-96 m-10' src="https://marketplace.canva.com/EAFNsV8XtFc/1/0/1067w/canva-white-modern-recipe-card-g0ij-n11PwM.jpg" alt="" />
      <div className='text-2xl w-full my-10'>
        <p>{currRecipe.name}</p>
        <p>total rating {currRecipe.rating} given by {currRecipe.totalRate}</p>
        <p>PreparetionTime : {currRecipe.preparetionTime}</p>
        <p>CookingTime : {currRecipe.cookingTime}</p>
        <p>Category : {currRecipe.category}</p>
        <p>Difficulty level : {currRecipe.difficulty}</p>
        <p>Ingredients : {currRecipe.ingredients}</p>
        <p>Process: {currRecipe.method}</p>
      </div>
    </div>
  )
}

export default RecipeDetails
