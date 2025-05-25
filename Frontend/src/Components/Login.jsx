import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
     const userInfo = {
        email: data.email,
        password: data.password,
      }
      await axios
      .post("http://localhost:3001/api/v1/user/logIn", userInfo)
      .then((res) => {
        console.log(res.data)
        if(res.data){
          // alert("LogIn successful")
          toast.success('LogIn successful');
          document.getElementById("my_modal_1").close();
          setTimeout(()=> {
            window.location.reload();
            localStorage.setItem("userInfo", JSON.stringify(res.data.user))
          }, 2000)
        }
      })
      .catch((err) => {
        if(err.response){
          console.log(err.response.data)
          // alert("Error: " + err.response.data.message)
          toast.error("Error: " + err.response.data.message);
          setTimeout(()=> {
          }, 2000)
        }
      })
  }

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
    <h3 className="font-bold text-xl drop-shadow-4xl shadow-2xl shadow-pink-600 rounded-2xl">LogIn</h3>
    {/* Email */}
    <div className='mt-3 space-y-2'>
      <h4 className='text-pink-600'>Email</h4>
      {/* <br /> */}
      <input type="email"
      placeholder='Enter your Email'
      className='outline-none border-3 w-90 rounded-md px-4 py-2 border-gray-700'
      {...register("email", { required: true })}
       />
       <br />
        {errors.email && <span className='text-sm text-red-400'>This field is required</span>}
    </div>
    {/* Password */}
    <div className='mt-5 space-y-2'>
      <h4 className='text-pink-600'>Password</h4>
      <input type="password"
      placeholder='Password Here'
      className='outline-none border-2 rounded-md px-4 py-2 border-gray-700'
      {...register("password", { required: true })}
       />
       <br />
        {errors.password && <span className='text-sm text-red-400'>This field is required</span>}
    </div>
    {/* Button */}
    <div className='flex justify-around mt-5'>
      <button className='bg-pink-900 px-5 py-2 rounded-2xl hover:bg-pink-600 duration-300 transition-all ease-in-out cursor-pointer hover:tracking-wide'>Let's Go</button>
      <p className='text-normal font-stretch-50% mt-2'>Not registered? 
        <Link
        to="/signup"
        className='underline text-indigo-600 cursor-pointer hover:text-indigo-500 duration-200 transition-all ease-in'>Signup</Link></p>
    </div>
    </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn rounded-md bg-pink-950 hover:bg-pink-900 duration-500 transition-all">Close</button>
      </form>
    </div>
  </div>
      </dialog>
    </div>
  )
}

export default Login
