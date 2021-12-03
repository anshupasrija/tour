import React from 'react'

function Tour({id,image,info,price,name}) {
  return (
    <article>
      <img src= {image} alt="name"/>
      <footer>
        <div>
          <h4>{name}</h4>
          <h4>${price}</h4>
        </div>
        <p>{info}</p>
        <button>Not Interested</button>
      </footer>
    </article>
  )
}

export default Tour
