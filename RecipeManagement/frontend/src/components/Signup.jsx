import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {
  const [user, setUser] = useState({});

  const handleForm = ()=>{
    event.preventDefault();

    console.log(user);
  }
  return (
    <div className='flex justify-center items-center'>
      <form action="" className='max-w-[500px] w-full shadow-xl p-4 mt-[10%] border-gray-400 border-2' onSubmit={()=> handleForm()}>
        <p className='font-bold text-2xl text-center'>SIGN_UP</p>
        <label htmlFor="name">Name : </label>
        <input required type="text" className='block w-full p-2' placeholder='Enter your name...' onChange={(e)=> setUser({...user, name : e.target.value})} />
        <label htmlFor="name">Email : </label>
        <input required type="text" className='block w-full p-2' placeholder='Enter your email...' onChange={(e)=> setUser({...user, email : e.target.value})} />
        <label htmlFor="name">Password : </label>
        <input required type="text" className='block w-full p-2' placeholder='Enter your password...' onChange={(e)=> setUser({...user, password : e.target.value})} />
        <Link to={"/login"}>Have Account</Link>
        <button type='submit' className='bg-blue-600 text-white w-full rounded-lg mt-2'>SIGN_UP</button>
      </form>
    </div>
  )
}

export default Signup
