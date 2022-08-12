import React from 'react'
import { Link } from 'react-router-dom'
export default function ContactUs() {
    return (
        <>
            <div className='container-fluid mb-2'>
                <div className='row'>
                    <div className='col-sm-6 col-12'>
                        <div className='col-3 contact'>
                            bharatrpt123@gmail.com
                        </div>
                        <div className='col-3 contact'>
                            9131742546
                        </div>
                        <div className='col-3 contact'>
                            jabalpur
                        </div>
                    </div>
                    <div className='col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Contact-Us Section</h5>
                        <form>
                            <div className="mb-3">
                                <label for="name" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" placeholder='Enter Name' />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" name="email" placeholder='Enter Email id'/>
                            </div>
                            <div className="mb-3">
                                <label for="phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" name="phone" placeholder='Enter Phone Number' />
                            </div>
                            <div className="mb-3">
                                <label for="subject" className="form-label">subject</label>
                                <input type="text" className="form-control" name="phone" placeholder='Enter Subject' />
                            </div>
                            <div className="mb-3">
                                <label for="subject" className="form-label">Message</label>
                                <textarea name='message' className='form-control' rows={5}></textarea>
                            </div>
                            <button type="submit" className="btn background text-light w-100">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
