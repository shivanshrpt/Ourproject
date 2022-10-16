import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card">
          <img
            src={props.image ? props.image : "..."}
            className="card-img-top"
            height="200px"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ height: "100px" }}>
              {props.title.slice(0, 50) + "..."}
            </h5>
            <h6>{new Date(props.date).toString()}</h6>
            <p className="card-text" style={{ height: "200px" }}>{props.description ? props.description.slice(0, 200) + "..." : ""}</p>
            <a href={props.url} style={{backgroundColor:' #ff99ff'}} className="btn background text-light w-100">
              Read Full Artical
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
