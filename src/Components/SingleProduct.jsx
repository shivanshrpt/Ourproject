import React,{useContext} from 'react'
import { Link, useParams } from 'react-router-dom'

import "./mystyle.css"
import { ProductContext } from '../global/ProductContext'
import { CartContext } from '../global/CartContext'
import { WishlistContext } from '../global/WishlistContext'
export default function SingleProduct() {
  var {products} = useContext(ProductContext)
  var {id} = useParams()
  const {dispatch} = useContext(CartContext)
  const {wishdispatch} = useContext(WishlistContext)
  id=parseInt(id)
  var item = products.find((item)=>item.id===id)
  return (
    <>
        <h3 className='background text-light text-center p-3'>Single Product Section</h3>
        <div className='container-fluid mb-3'>
          <div className='row'>
            <div className='col-sm-6 col-12'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={item.pic1} className="d-block w-100" style={{height:"500px"}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={item.pic2} className="d-block w-100" style={{height:"500px"}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={item.pic3} className="d-block w-100" style={{height:"500px"}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={item.pic4} className="d-block w-100" style={{height:"500px"}} alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <img src={item.pic1} style={{width:"24%"}}/>
                <img src={item.pic2} style={{width:"24%"}}/>
                <img src={item.pic3} style={{width:"24%"}}/>
                <img src={item.pic4} style={{width:"24%"}}/>
              </div>
            </div>
            <div className='col-sm-6 col-12'>
              <table className='table table-light table-striped table-hover'>
                <tbody>
                <tr>
                  <th>Name</th>
                  <td>{item.name}</td>
                </tr>
                <tr>
                  <th>Main-Category</th>
                  <td>{item.maincategory}</td>
                </tr>
                <tr>
                  <th>Sub-Category</th>
                  <td>{item.subcategory}</td>
                </tr>
                <tr>
                  <th>Brand</th>
                  <td>{item.brand}</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>Rs <strike>{item.baseprice}</strike></td>
                </tr>
                <tr>
                  <th>Discount</th>
                  <td>{item.discount}%</td>
                </tr>
                <tr>
                  <th>Final Price</th>
                  <td>{item.finalprice}</td>
                </tr>
                <tr>
                  <th>Color</th>
                  <td>{item.color}</td>
                </tr>
                <tr>
                  <th>Size</th>
                  <td>{item.size}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{item.description}</td>
                </tr>
                <tr>
                  <th><Link to={"/cart"} className="btn background text-light w-100" onClick={()=>dispatch({type:"Add_To_Cart",id:item.id,product:item})}>Add to Cart</Link></th>
                  <td><Link to={"/profile"} className="btn background text-light w-100"onClick={()=>wishdispatch({type:"Add_To_Wishlist",id:item.id,product:item})}>Add to Wishlist</Link></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </>
  )
}
