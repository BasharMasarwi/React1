import React from 'react'

export default function product(props) {
  return (
    <>
       <div className="col-md-4 product">
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                </div>
    </>
 
  )
}
