import React from 'react';
import Tour from './Tour'


function Tours({tours}) {
  console.log({tours})
  return (
    <div>
      {tours.map((tour)=>{
        return <Tour key = {tour.id}{...tour}></Tour>
      })}
     
    </div>
  )
}

export default Tours;