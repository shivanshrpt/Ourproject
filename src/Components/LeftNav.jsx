import React from 'react'
import "./mystyle.css"
import { Link,useParams } from 'react-router-dom'
export default function LeftNav() {
    var {mc,sc,brand}=useParams()
    return (
        <>
            <div className="list-group">
                <p className="background text-light p-2 mb-2">Main-Category</p>
                <Link to={"/shop/All"+"/"+sc+"/"+brand} className="list-group-item list-group-item-action">All</Link>
                <Link to={"/shop/Male"+"/"+sc+"/"+brand} className="list-group-item list-group-item-action">Male</Link>
                <Link to={"/shop/Female"+"/"+sc+"/"+brand} className="list-group-item list-group-item-action">Female</Link>
                <Link to={"/shop/Kids"+"/"+sc+"/"+brand} className="list-group-item list-group-item-action">Kids</Link>
            </div>
            <div className="list-group">
            <p className="background text-light p-2 mb-2">Sub-Category</p>
                <Link to={"/shop/"+mc+"/All"+"/"+brand} className="list-group-item list-group-item-action">All</Link>
                <Link to={"/shop/"+mc+"/Tshirt"+"/"+brand} className="list-group-item list-group-item-action">Tshirt</Link>
                <Link to={"/shop/"+mc+"/Shirt"+"/"+brand} className="list-group-item list-group-item-action">Shirt</Link>
                <Link to={"/shop/"+mc+"/Jeans"+"/"+brand} className="list-group-item list-group-item-action">Jeans</Link>
                <Link to={"/shop/"+mc+"/Trouser"+"/"+brand}className="list-group-item list-group-item-action">Trouser</Link>
            </div>
            <div className="list-group">
            <p className="background text-light p-2 mb-2">Brand</p>
                <Link to={"/shop/"+mc+"/"+sc+"/All"} className="list-group-item list-group-item-action">All</Link>
                <Link to={"/shop/"+mc+"/"+sc+"/Adidas"} className="list-group-item list-group-item-action">Adidas</Link>
                <Link to={"/shop/"+mc+"/"+sc+"/Polo"} className="list-group-item list-group-item-action">Polo</Link>
                <Link to={"/shop/"+mc+"/"+sc+"/Mufti"} className="list-group-item list-group-item-action">Mufti</Link>
                <Link to={"/shop/"+mc+"/"+sc+"/Gucci"}className="list-group-item list-group-item-action">Gucci</Link>

            </div>
        </>
    )
}
