import React from 'react'

function Cards({item}) {
  
  return (
    <>
    <div className='mt-10'>
    <div className="card bg-base-100 w-95 shadow-xl px-5 hover:scale-105 duration-200 cursor-pointer " >
  <figure >

    <img
      src={item.image}
      alt="Shoes" />


      
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer hover:bg-pink-500 duration-500 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
    </div>

    </>
  )
}

export default Cards