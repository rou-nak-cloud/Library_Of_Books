import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Signup = () => {
  return (
    <div>
       <div id="my_modal_1" className="h-screen flex items-center justify-center">
  <div className="border-2 border-slate-700 p-8 rounded-2xl shadow-2xl shadow-pink-900">
    <h3 className="font-bold text-xl drop-shadow-4xl shadow-2xl shadow-pink-600 rounded-2xl">SignUp</h3>
    {/* Name */}
     <div className='mt-3 space-y-2'>
      <h4 className='text-pink-600'>Name</h4>
      <input type="text"
      placeholder='Enter your Name'
      className='outline-none border-3 w-90 rounded-md px-4 py-2 border-gray-700' />
    </div>
    {/* Email */}
    <div className='mt-3 space-y-2'>
      <h4 className='text-pink-600'>Email</h4>
      {/* <br /> */}
      <input type="email"
      placeholder='Enter your Email'
      className='outline-none border-3 w-90 rounded-md px-4 py-2 border-gray-700' />
    </div>
    {/* Password */}
    <div className='mt-5 space-y-2'>
      <h4 className='text-pink-600'>Password</h4>
      <input type="password"
      placeholder='Password Here'
      className='outline-none border-2 rounded-md px-4 py-2 border-gray-700' />
    </div>
    {/* Button */}
    <div className='flex justify-around mt-5'>
      <button className='bg-pink-900 px-5 py-2 rounded-2xl hover:bg-pink-600 duration-300 transition-all ease-in-out cursor-pointer hover:tracking-wide'>Let's Go</button>
      <p className='text-normal font-stretch-50% mt-2'>Have an Account?
        <Link  
        to="/"
        className='underline text-indigo-600 cursor-pointer hover:text-indigo-500 duration-200 transition-all ease-in'
        // onClick={()=>document.getElementById("my_modal_1").showModal()}
        >Go home</Link>
        {/* <Login /> */}
        </p>
    </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link
        to="/"
        className="btn rounded-md bg-pink-950 hover:bg-pink-900 duration-500 transition-all">Close</Link>
      </form>
    </div>
  </div>
      </div>
    </div>
  )
}

export default Signup
