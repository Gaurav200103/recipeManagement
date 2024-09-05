import React from 'react'
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';

const CreateRecipe = () => {
  const dispatch = useDispatch();

  const handleForm = () => {
    event.preventDefault();

    dispatch();
  }
  return (

    <div className='w-full flex justify-center'>
      <form action="" className='max-w-[500px] w-full mt-[5%] shadow-2xl p-4 border-2' onSubmit={() => handleForm()}>
        <p className='text-2xl font-bold text-center'>ADD RECIPE</p>
        <label htmlFor="name">Recipe Name : </label>
        <input className='block p-2' type="text" placeholder='Enter Recipe Name..' />
        <label htmlFor="preparetionTime">PreparetionTime : </label>
        <input className='block p-2' type="number" placeholder='Enter Recipe PreparetionTime..' />
        <label htmlFor="name">CookingTime : </label>
        <input className='block p-2' type="number" placeholder='Enter Recipe CookingTime..' />
        <label htmlFor="name">Category : </label>
        <input className='block p-2' type="text" placeholder='Enter Recipe Category..' />
        <label htmlFor="name">Method : </label>
        <input className='block p-2' type="text" placeholder='Enter Recipe Method..' />
        <select className='block py-2' name="" id="">
          <option value="">Select difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button className='bg-blue-600 text-white p-2 w-full rounded-xl' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreateRecipe
