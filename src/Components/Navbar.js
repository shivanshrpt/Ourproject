import React,{useState} from "react";
import { Link, Navigate } from "react-router-dom";
import Admin from "./Admin";
import pic from "../global/icon.png";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineFrown,
  AiOutlineAlignLeft,
} from "react-icons/ai";

import "./index.css";

export default function Navbar() {
  const [search , setSearch] = useState('✍️ write somthing here 👍 😁 🤣');
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid mt-3" style={{borderBottom:'10px solid pink'}}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              {" "}
              <img src="../global/icon.png" />{" "}
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              <i className="bi bi-house-fill"></i>
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: "white" }}
                  to="/"
                >
                  <h4>
                    <AiOutlineAlignLeft />{" "}
                  </h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="Profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    News category 
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        All
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/crime">
                         Crime
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/politics">
                        Politics
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/jokes">
                        Jokes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/entertainment">
                        Entertainment
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/kids">
                       Kids
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/education">
                        Education
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <a
                className="nav-link disabled"
                style={{ marginLeft: "500px", color: "white" }}
                href="#"
              >
                <h3> </h3>
              </a>
            </ul>

            <form className="d-flex w-10" role="search">


             <div className="w-40 mr-2" style={{ border:'1px solid red', marginRight:'20px'}}>
             <div className="div_center mt-2 w-17  " style={{border:"1px solid black",height:'15px' ,  float:'right'}}>
              <input type='search'  style={{textAlign:'center'}} onChange={(e)=>setSearch(e.target.value)} placeholder={search} />
             </div>
             
              <div style={{backgroundColor:'grey' , color:'white'}}> <AiOutlineSearch /> </div>
            
             </div>

              <div className="mt-2 mr-10" style={{ color: "white" }}>
                <h3>
                  <AiOutlineFrown />
                </h3>
              </div>
              <button
                className="btn btn-outline-dark"
                style={{ marginLeft: "10px", marginRight: "10px" }}
                type="submit"
              >
                {" "}
                user login
              </button>
              <div className="mt-2 mr-10" style={{ color: "white" }}>
                <h3>
                  <AiOutlineHome />
                </h3>
              </div>
              
              <button
                className="btn btn-outline-dark"
                onClick={() => navigate("/Admin")}
                style={{ marginLeft: "10px", marginRight: "10px" }}
                type="submit"
              >
                Admin login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
