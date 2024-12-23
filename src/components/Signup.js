import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup(props) {
  const [credentials, setcredential] = useState({
    name: "",
    name1: "",
    email: "",
    number: "",
    aadharnumber: "",
    cropsname: "",
    password: "",
  });
  const [content, setcontent] = useState("");
  const password = document.querySelector("#exampleInputEmail1");
  const navigate = useNavigate();
  const handleonClick = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/auth/createuser";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        name1: credentials.name1,
        email: credentials.email,
        number: credentials.number,
        aadharnumber: credentials.aadharnumber,
        cropsname: credentials.cropsname,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success === true) {
      localStorage.setItem("token", json.token);
      navigate("/home");
      props.showalert();
    } else {
      props.showalert();
      //password.style.border = "1px solid red";
      //setcontent("User with this Email is already exist");
    }
  };
  const onchange = (e) => {
    setcredential({ ...credentials, [e.target.name]: e.target.value });
    //password.style.border = "";
    //setcontent("");
  };
  return (
    <>
    <div className="container" style={{display:"flex",justifyContent:"center",alignItems:"cenetr",marginTop:"80px",marginBottom:"40px",position:"fixed",left:"128px",zIndex:"10"}}>
    <div
      className="container"
      style={{
        marginTop: "0px",
        width: "500px",
        height: "550px",
        border: "2px solid #EAEAEA",
        boxSizing: "border-box",
        paddingTop: "0px",
        borderRadius: "12px",
        boxShadow: "0px 10px 25px #000",
        zIndex:"1",
        backgroundColor:"whitesmoke",//#E4F1E8
          opacity:"0.8",
        fontSize:"15px",
        fontWeight:"700",
        display:"flex",
        flexDirection:"column",
      }}
    >
      <form onSubmit={handleonClick}>
        <div
          className="mb-1 my-3"
        >
          <div>
          <h2>Create an account <img style={{height:"50px",borderRadius:"50%",marginLeft:"140px"}} src="/logo.jpg" alt="Description" /></h2>
          </div>
          <div className="mb-1" style={{display:"flex",justifyContent:"space-between"}}>
            <div>
              <label htmlFor="name" className="form-label">
                FirstName
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                name="name"
                value={credentials.name}
                onChange={onchange}
              />
            </div>
            <div>
              <label htmlFor="name1" className="form-label">
                LastName
              </label>
              <input
                type="name1"
                className="form-control"
                id="name1"
                aria-describedby="emailHelp"
                name="name1"
                value={credentials.name1}
                onChange={onchange}
              />
            </div>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={onchange}
          />
          <p style={{color:"red",marginTop:"5px",marginLeft:"2px"}}>{content}</p>
        </div>
        <div className="mb-1" style={{display:"flex",justifyContent:"space-between"}}>
          <div className="mb-1">
            <label htmlFor="exampleInputNumber1" className="form-label">
              Mobile Number
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputNumber1"
              name="number"
              value={credentials.number}
              onChange={onchange}
            />
          </div>
          <div className="mb-1" >
            <label htmlFor="exampleInputaadharNumber1" className="form-label">
              Pan Number
            </label>
            <input
              type="aadharnumber"
              className="form-control"
              id="exampleInputaadharNumber1"
              name="aadharnumber"
              value={credentials.aadharnumber}
              onChange={onchange}
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputcropsname1" className="form-label">
            Crops you grow
          </label>
          <input
            type="cropsname"
            className="form-control"
            id="exampleInputcropsname1"
            name="cropsname"
            value={credentials.cropsname}
            onChange={onchange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={onchange}
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          SignUp
        </button>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <p onClick={props.handleonClick2}> Already have an account.. Login</p>
        </Link>
      </form>
    </div>
    </div>
    </>
  );
}
