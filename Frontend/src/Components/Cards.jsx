import React from 'react'

const Cards = ( {item}) => {
    // console.log(item)
  return (
    <>
     <div className='mt-8 my-5 p-1'>
        <div className="card bg-base-200 w-95 shadow-2xl cursor-pointer hover:scale-102 duration-400 dark:bg-slate-900 dark:text-white">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      <div className="badge badge-secondary hover:bg-pink-700 duration-300 ease-in">#FreeBook</div>
    </h2>
    <p>{item.name}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline bg-pink-900 cursor-pointer hover:bg-pink-600 duration-300 ease-in border-none font-bold">{item.category}</div>
      <div className="badge badge-outline cursor-pointer hover:bg-pink-600 duration-300 ease-in outline-none border-none font-bold">{item.price}</div>
      {/* <div className="badge badge-outline">Buy Now..</div> */}
    </div>
  </div>
</div>
    </div> 
    </>
  )
}

export default Cards
