import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from "../global/CartContext"
export default function Cart() {
    var {shoppingCart,totalPrice,dispatch} = useContext(CartContext)
    var finalprice = totalPrice
    if(totalPrice<1000)
        finalprice=150+totalPrice
    return (
        <>
           {shoppingCart.length>0?
           <>
           <h3 className='background text-light text-center p-3'>Cart Section</h3>
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
                            <th>Qty</th>
                            <th></th>
                            <th>Final</th>
                            <th></th>
                        </tr>
                        {shoppingCart.map((item,index)=>{
                            return(
                                <>
                                <tr>
                                    <td><Link to={"/product/"+item.id}><img src={item.pic1} style={{ width: "100px", height: "100px", borderRadius: "10px" }} /></Link></td>
                                    <td>{item.name}</td>
                                    <td>{item.color}</td>
                                    <td>{item.size}</td>
                                    <td>{item.finalprice}</td>
                                    <td><button className='btn text-primary' onClick={()=>dispatch({type:"Inc",id:item.id,product:item})}><i className="material-icons">add</i></button></td>
                                    <td>{item.qty}</td>
                                    <td><button className='btn text-primary' onClick={()=>dispatch({type:"Dec",id:item.id,product:item})}><i className="material-icons">remove</i></button></td>
                                    <td>{item.finalprice*item.qty}</td>
                                    <th><Link to={"/Cart"} onClick={()=>dispatch({type:"Delete",id:item.id,product:item})}><i className="material-icons">delete_forever</i></Link></th>
                                </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='row'>
                <div className='col-md-6 col-sm-4 col-12'>

                </div>
                <div className='col-md-6 col-sm-8 col-12'>
                    <table className='table table-light table-striped table-hover'>
                        <tbody>
                            <tr>
                                <th>Total</th>
                                <td>Rs {totalPrice}</td>
                            </tr>
                            <tr>
                                <th>Shipping</th>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <th>Final Amount</th>
                                <td>Rs {finalprice}</td>
                            </tr>
                            <tr>
                                <th colSpan={2}><Link className='btn background text-light w-100' to={""}>Checkout</Link></th>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
           </>:
           <h1 className="background text-light text-center p-3">Cart is Empty</h1>
           } 
        </>
    )
}
