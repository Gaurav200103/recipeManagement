import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMyRecipes } from '../storage/recipeSlice';
import RecipeItem from './RecipeItem';

const MyRecipe = () => {
  const dispatch = useDispatch();
  const {myRecipes} = useSelector(state => state.recipeReducer);

  console.log(myRecipes);
  useEffect(()=>{
    dispatch(getMyRecipes());
  }, []);

  return (
    <div>
      {
        myRecipes.map(item =>{
          return <RecipeItem item={item} allowEdit={true} />
        })
      }
    </div>
  )
}

export default MyRecipe
