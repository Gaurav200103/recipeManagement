import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../storage/recipeSlice';
import RecipeItem from './RecipeItem';

const Home = () => {
  const dispatch = useDispatch();
  const {recipeList} = useSelector(state => state.recipeReducer);

  console.log(recipeList);

  useEffect(()=>{
    dispatch(getRecipes());
  }, [])

  return (
    <div>
      
      {
        recipeList.map(item =>{
          return <RecipeItem item={item} />
        })
      }
    </div>
  )
}

export default Home
