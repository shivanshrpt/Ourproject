import React, { useContext } from 'react'
import { ProductContext } from '../global/ProductContext'
import ProductItem from './ProductItem'
export default function ProductList(props) {
    var {products} = useContext(ProductContext)
    var productList=[]
    if(props.mc==="All" && props.sc==="All" && props.brand==="All")
        productList=products
    else if(props.mc!=="All" && props.sc==="All" && props.brand==="All")
        productList = products.filter((item)=>item.maincategory===props.mc)
    else if(props.mc==="All" && props.sc!=="All" && props.brand==="All")
        productList = products.filter((item)=>item.subcategory===props.sc)
    else if(props.mc==="All" && props.sc==="All" && props.brand!=="All")
        productList = products.filter((item)=>item.brand===props.brand)
    else if(props.mc!=="All" && props.sc!=="All" && props.brand==="All")
        productList = products.filter((item)=>item.maincategory===props.mc && item.subcategory===props.sc)
    else if(props.mc!=="All" && props.sc==="All" && props.brand!=="All")
        productList = products.filter((item)=>item.maincategory===props.mc && item.brand===props.brand)        
    else if(props.mc==="All" && props.sc!=="All" && props.brand!=="All")
        productList = products.filter((item)=>item.brand===props.brand && item.subcategory===props.sc)
    else
        productList = products.filter((item)=>item.maincategory===props.mc && item.subcategory===props.sc && item.brand===props.brand)
    return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                {
                    productList.map((item,index)=>{
                        return(
                            <ProductItem
                                key={index}
                                id = {item.id}
                                name = {item.name}
                                baseprice = {item.baseprice}
                                discount = {item.discount}
                                finalprice = {item.finalprice}
                                pic = {item.pic1}
                            />
                        )
                    })
                }
            </div>
        </div>
    </>  
  )
}
