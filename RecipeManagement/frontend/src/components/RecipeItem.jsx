import React from 'react'
import { useDispatch } from 'react-redux'
import { addSingleRecipe } from '../storage/recipeSlice';
import { useNavigate } from 'react-router-dom';

const RecipeItem = ({item, allowEdit}) => {
  const dispatch= useDispatch();
  const navigate = useNavigate();

  const readMoreFunc = (item)=>{
    dispatch(addSingleRecipe(item));
    allowEdit ? navigate("/myRecipeDetails") : navigate("/recipeDetails");
  }
  return (
    <div className='max-w-[400px]'>
      <p>Name : {item.name}</p>
      <p>Difficulty : {item.difficulty}</p>
      <button className='bg-blue-600 text-white py-2 rounded-xl w-full' onClick={()=> readMoreFunc(item)}>Read More</button>
    </div>
  )
}

export default RecipeItem
