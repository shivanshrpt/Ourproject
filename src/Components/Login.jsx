import React from 'react'
import { Link } from 'react-router-dom'
import pic from "../assets/images/noimage.png"
export default function Login() {
    return (
        <>
            <div className='container-fluid mb-2'>
                <div className='row'>
                    <div className='col-sm-6 col-12'>
                        <img src={pic} className="w-100"></img>
                    </div>
                    <div className='col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Login Section</h5>
                        <form>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" name="email" placeholder='Enter Email id'/>
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" placeholder='Enter Password'/>
                            </div>
                            <button type="submit" className="btn background text-light w-100">login</button>
                            <Link to={"/signup"} className="text-decoration-none">New User?Create an Account</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
