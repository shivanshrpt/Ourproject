import React, { useEffect } from 'react'

async function  getdata(){
  var rawdata = await fetch('https://dog.ceo/api/breeds/image/random')
  var data =  await rawdata.json()
   console.log(data);
}


export default function Body() {
  useEffect(()=>{
    getdata();
  },[])
  return (
    <>
      
    </>
  )
}
