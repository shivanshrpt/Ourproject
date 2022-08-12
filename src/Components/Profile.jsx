import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

import "./mystyle.css"
import pic from "../assets/images/user.jpeg"

import { WishlistContext } from '../global/WishlistContext'
export default function Profile() {
    var { wishlist, wishdispatch } = useContext(WishlistContext)
    return (
        <>
            <h3 className='background text-light  text-center p-3'>Buyer  Profile Section</h3>
            <div className='container-fluid mb-3'>
                <div className='row'>
                    <div className='col-sm-6 col-12 '>
                        <img src={pic} className="w-100"></img>
                    </div>
                    <div className='col-sm-6 col-12 '>
                        <table className='table table-light table-striped table-hover'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>Bharat Singh Rajput</td>
                                </tr>
                                <tr>
                                    <th>User Name</th>
                                    <td>Bharat</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>Bharatrpt123@gmail.com</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>9131742546</td>
                                </tr>
                                <tr>
                                    <th>Address line 1</th>
                                    <td>sastri nagar.</td>
                                </tr>
                                <tr>
                                    <th>Address Line 2</th>
                                    <td>Street Number 5</td>
                                </tr>
                                <tr>
                                    <th>Address Line3</th>
                                    <td>Village </td>
                                </tr>
                                <tr>
                                    <th>ZIP</th>
                                    <td>121002</td>
                                </tr>
                                <tr>
                                    <th>City</th>
                                    <td>jabalpur</td>
                                </tr>
                                <tr>
                                    <th>State</th>
                                    <td>Mp</td>
                                </tr>
                                <tr>
                                    <th colSpan={2}><Link to="" className='btn background text-light w-100'>Update Profile</Link></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <h3 className='background text-light text-center p-3'>Wishlist Section</h3>
            {
                wishlist.length>0?
                <div className='table-responsive'>
                <table className='table table-light table-striped table-hover'>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        {wishlist.map((item, index) => {
                            return (
                                <>
                                    <tr>
                                        <td><Link to={"/product/" + item.id}><img src={item.pic1} style={{ width: "100px", height: "100px", borderRadius: "10px" }} /></Link></td>
                                        <td>{item.name}</td>
                                        <td>{item.color}</td>
                                        <td>{item.size}</td>
                                        <td>{item.finalprice}</td>
                                        <td><Link to={"/product/" + item.id} onClick={() => wishdispatch({ type: "Remove_From_Wishlist", id: item.id })}><i className="material-icons"><span class="material-icons-outlined">add_shopping_cart</span></i></Link></td>
                                        <th><Link to={"/profile"} onClick={() => wishdispatch({ type: "Remove_From_Wishlist", id: item.id })}><i className="material-icons">delete_forever</i></Link></th>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>:
            <h5 className='background text-light text-center p-2'>No items in Wishlist</h5>
            }
        </>
    )
}
