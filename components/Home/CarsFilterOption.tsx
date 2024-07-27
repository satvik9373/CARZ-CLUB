import React from 'react'

function CarsFilterOption() {
  return (
    <div className='mt-10 flex items-center justify-between'>
        <div>
            <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
            <h2>Explore Our Cars You Might Like</h2>
        </div>
        <div className='flex gap-5'>
        <select className="select select-bordered w-full max-w-xs text-black bg-transparent">
  <option disabled selected>Price</option>
  <option>Min to Max</option>
  <option>Max to Min</option>
</select>
<select className="select select-bordered w-full md:block max-w-xs hidden text-black bg-transparent">
  <option disabled selected>ManuFactural</option>
  <option>Min to Max</option>
  <option>Max to Min</option>
</select>
        </div>
    </div>
  )
}

export default CarsFilterOption