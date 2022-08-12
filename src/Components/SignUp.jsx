import React from 'react'
import { Link } from 'react-router-dom'
import pic from "../assets/images/noimage.png"
export default function SignUp() {
    return (
        <>
            <div className='container-fluid mb-2'>
                <div className='row'>
                    <div className='col-sm-6 col-12'>
                        <img src={pic} className="w-100"></img>
                    </div>
                    <div className='col-sm-6 col-12'>
                        <h5 className='background text-light text-center p-2'>SignUp Section</h5>
                        <form>
                            <div className="mb-3">
                                <label for="name" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" placeholder='Enter Name' />
                            </div>
                            <div className="mb-3">
                                <label for="username" className="form-label">User Name</label>
                                <input type="text" className="form-control" name="username" placeholder='Enter Name' />
                            </div>

                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" name="email" placeholder='Enter Email id' />
                            </div>
                            <div className="mb-3">
                                <label for="phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" name="phone" placeholder='Enter Phone Number' />
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" placeholder='Enter Password' />
                            </div>
                            <div className="mb-3">
                                <label for="cpassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" name="cpassword" placeholder='Confirm Password' />
                            </div>
                            <button type="submit" className="btn background text-light w-100">SignUp</button>
                            <Link to="/login" className="text-decoration-none">Already User?Login</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
