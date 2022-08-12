import React from 'react'
import Banner from "./Banner";

import "./mystyle.css"
import ProductList from './ProductList';
export default function Home() {
  return (
    <>
        <Banner/>
        <h1 className='background text-center p-3 text-light'>Product Section</h1>
        <ProductList  mc="All" sc="All" brand="All"/>
       
    </>
    
  )
}
