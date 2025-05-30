import React from 'react'
// import list from "../../public/list.json"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from 'axios'

import Cards from './Cards';
import { useState } from 'react';
import { useEffect } from 'react';

const FreeBook = () => {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async ()=> {
      try {
        const res = await axios.get("http://localhost:3001/api/v1/book")
        console.log(res.data)
        const freeBook = res.data.filter((data) => data?.price?.toLowerCase() === "free")
        console.log("Filtered free books:", freeBook);
        setBook(freeBook)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[]);
  console.log("Book state:", book);
    // const filterData = list.filter((data) => data.price === "free")
    // console.log(filterData)

     var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-6'>
        <div>
            <h1 className='text-xl font-semibold pb-2'>Free <span className='text-red-700'>Books</span> in Library</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis rem reiciendis quis atque porro ipsam dicta aliquid quo, facere consequatur doloremque numquam saepe hic!</p>
        </div>

            <div className='slider mt-5'>
            <Slider {...settings}>
                {book.map((item) => (
                    <Cards item={item} key={item.id} />
                ))}   
            </Slider>
            </div>

     </div>
    </>
  )
}

export default FreeBook
