import React from 'react'

export default function Spinner() {
  return (
    <div style={{backgroundColor:'grey'}}>
      
      <div className="container text-center" >
                <div className="spinner-border text-primary text-center mt-5 mb-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
          

    </div>
  )
}
