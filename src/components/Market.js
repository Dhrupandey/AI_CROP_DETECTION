import React from "react";
//import { Link } from "react-router-dom";

export default function Market(props) {
  return (
    <>
      <div className="col-md-2">
      <div className="card my-3" style={{backgroundColor:"#E4F1E8"}}>
        <img src={props.img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
          {props.title}
          </p>
          <p className="card-text">
          {"Seller-"}{props.seller}
          </p>
          <p className="card-text">
          {"Price-"}{props.price}
          </p>
          <div className="d-flex justify-content-end p" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
          <i className="fa-solid fa-cart-shopping "></i><p style={{cursor:"pointer",marginTop:"10px",marginLeft:"2px"}}>Add to the cart</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
