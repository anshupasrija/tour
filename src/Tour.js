import React from 'react'

function Tour({id,image,info,price,name}) {
  return (
    <article className="tour-container">
      <img src= {image} alt="name" className="tour-image"/>
      <footer>
        <div className="tour-subcontainer">
          <h4 className="tour-heading">{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <div className = "tour-info">
        <p className= "tour-paragraph">{info}</p>
        <button className="tour-button">Not Interested</button>
        </div>
      </footer>
    </article>
  )
}

export default Tour
