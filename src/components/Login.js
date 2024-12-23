import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(props) {
  const [credentials, setcredential] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [content, setcontent] = useState("");
  const password = document.querySelector("#exampleInputPassword1");

  const handleonClick = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success === true) {
      localStorage.setItem("token", json.token);
      navigate("/home");
      props.showalert();
    } else {
      props.showalert();
      password.style.border = "1px solid red";
      setcontent("Please enter the correct password");
    }
  };
  const onchange = (e) => {
    setcredential({ ...credentials, [e.target.name]: e.target.value });
    //if (password.value.length === 0) {
    //  password.style.border = "";
    //  setcontent("");
    //} else {
    //  
    //}
  };
  return (
    <div className="container" style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"150px",position:"fixed",left:"128px",zIndex:"10"}}>
      <div
        className="container"
        style={{
          marginTop: "20px",
          width: "500px",
          height: "400px",
          border: "2px solid #EAEAEA",
          boxSizing: "border-box",
          paddingTop: "40px",
          borderRadius: "12px",
          boxShadow: "0px 10px 25px #000",
          fontWeight:"700",
          backgroundColor:"whitesmoke",//#E4F1E8
          opacity:"0.8",
        }}
      >
        <form onSubmit={handleonClick} style={{ columnGap: "20px" }}>
          <div>
            <h2 style={{marginLeft:"5px"}}>Login into a account<img style={{height:"50px",borderRadius:"50%",marginLeft:"80px"}} src="/logo.jpg" alt="Description" /></h2>
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
            <div
              id="emailHelp"
              className="form-text"
            >
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
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
            <p style={{ color: "red" }}>{content}</p>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Login
          </button>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <p onClick={props.handleonClick2} > Don't have an account..SignUp</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
