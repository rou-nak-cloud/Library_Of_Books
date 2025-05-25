import React from 'react'
// import list from '../../public/list.json'  now using backend
import axios from 'axios'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Courses = () => {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async ()=> {
            try {
                const response = await axios.get("http://localhost:3001/api/v1/book")
                // console.log(response.data)
                setBook(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])
  return (

    <>
       <div className='min-h-screen dark:text-black'>
        <div className='max-w-screen-2xl container md:px-20 px-6 mx-auto'>
            <div className='heading mt-30 items-center justify-center text-center'>
                <h1 className='md:text-4xl text-2xl'>Welcome to <span className='text-pink-700 text-5xl'>AbraCaDabra.</span></h1>
                <p className='mt-22'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla amet, unde placeat quibusdam ducimus aperiam voluptates, voluptate, voluptatibus doloremque consequuntur rerum veniam eligendi perferendis modi! Iste architecto ea tempore laboriosam ad, eligendi nesciunt excepturi autem omnis tenetur, ducimus repudiandae consequatur odit! Atque eligendi adipisci expedita itaque nemo nihil similique possimus, quasi nisi minus officia ut fugit beatae aliquam, ab totam?</p>
                <Link to="/">
                    <button className='bg-pink-700 font-semibold px-19 py-3 mt-6 rounded-lg hover:bg-pink-900 duration-300 ease-in-out transition-all cursor-pointer'>Back to Book Home</button>
                </Link>
            </div>
            <div className='cards mt-10 grid grid-cols-1 md:grid-cols-3'>
                {
                    book.map((item)=>(
                        <Cards item={item} key={item.id} />
                    ))
                }
            </div>
        </div>
       </div>
    </>
  )
}

export default Courses
