import React from 'react'
import CarCard from './CarCard'

function CarsList(props:any) {
  return (
    <div className='grid grid-cols-2 
    md:grid-cols-3
    lg:grid-cols-4'>
        {props.carsList.map((car:any,index:number)=>(
           
                <CarCard car ={car}/>
        ))}
    </div>
  )
}

export default CarsList