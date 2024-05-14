import React from 'react'

function InfoItem({ data }) {
    console.log(data)
return (
    <div className='bg-white shadow-md p-4'>
         <h1 className='text-3xl text-center font-bold text-teal-600 lg:my-8'>{data.mainTitle}</h1>
         <p className='text-gray-500'>{data.intro}</p>
        <h3 className='text-xl font-bold text-teal-600 my-5'>{data.title}</h3>
        <p className='text-gray-500'>{data.sub}</p>
       <div className='flex justify-center items-center'><img  src={data.img} width={'300px'} /></div>
    </div>
)
}

export default InfoItem