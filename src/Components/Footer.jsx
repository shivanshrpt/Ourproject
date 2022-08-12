import React from 'react'
export default function Footer() {
  return (
    <>
      <div className='container-fluid background text-center p-3 text-light'>
        <p>CopyRight@myshop.com</p>
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-8'>
            <form>
              <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder='Enter Email Id to Subscribe our NewsLatter' />
              </div>
              <button type="submit" className="btn bg-light w-100 btn-sm">Submit</button>
            </form>
          </div>
          <div className='col-2'></div>
        </div>
      </div>
    </>
  )
}
