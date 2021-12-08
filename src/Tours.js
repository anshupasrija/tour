import React from 'react';
import Tour from './Tour'


function Tours({tours,removeTour}) {
  console.log({tours})
  return (
    <div>
      {tours.map((tour)=>{
        return <Tour key = {tour.id}{...tour}removeTour={removeTour}></Tour>
      })}
     
    </div>
  )
}

export default Tours;
