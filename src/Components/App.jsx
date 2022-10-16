
import React from "react";
import Admin from "./Admin";
import Body from "./Body";
import Profile from "./Profile";
import Error from "./Error";
import User from "./User";
import { Routes , Route } from "react-router-dom";


import Navbar from "./Navbar";
import Home from "./Home";

export default function App() {
  return (
    <>
          <Navbar/>
          
      <Routes>
        <Route  path='/' element={<Home category='all'/>}/>
        <Route  path='/Home' element={<Home category='all'/>}/>
        <Route  path='/sports' element={<Home category='sports'/>}/>
        <Route  path='/science' element={<Home category='science'/>}/>
        <Route  path='/entertainment' element={<Home category='entertainment'/>}/>
        <Route  path='/kids' element={<Home category='kids'/>}/>
        <Route  path='/politics' element={<Home category='politics'/>}/>
        <Route  path='/education' element={<Home category='education'/>}/>
        <Route  path='/jokes' element={<Home category='jokes'/>}/>
        <Route  path='/crime' element={<Home category='crime'/>}/>
        <Route  path='/body' element={<Body />}/>
        <Route  path='/Admin' element={<Admin />}/>
        <Route  path='/User' element={<User />}/>
        <Route  path='/Profile' element={<Profile />}/>
        <Route  path='/*' element={<Error />}/>
      </Routes>

       
    </>
  );
}
