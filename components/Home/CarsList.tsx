import React from 'react'
import CarCard from './CarCard'

function CarsList(props:any) {
  return (
    <div>
        {props.carsList.map((car:any,index:number)=>(
            <div className='grid grid-cols-2 
            md:grid-cols-3
            lg:grid-cols-4'>
                <CarCard car ={car}/>
               
                </div>
        ))}
    </div>
  )
}

export default CarsList