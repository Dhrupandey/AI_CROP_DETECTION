import React,{useState,useEffect} from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";

export default function Navbar(props) {
  let location = useLocation();
  const navigate=useNavigate();
  const [disable, setdisable] = useState("none");
  const [disable1, setdisable1] = useState("");
  const[articles,setarticles]=useState("");
  const[main,setmain]=useState("");

  const updatenews = async () => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=New%20Delhi&appid=190dfc4fed3386777429b9d4bc2ed376`;
    let data = await fetch(url);
    let response = await data.json();
    setmain(response.weather[0].main);
    let temp=response.main.temp-273;
    let a=temp.toFixed(1);
    setarticles(a);
  };
  useEffect(() => {
    updatenews();
    // eslint-disable-next-line
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setdisable("none");
    setdisable1("");
    props.showalert();
  };
  useEffect(() => {
    if(localStorage.getItem('token')){
      setdisable("");
      setdisable1("none");
    }
  }, [location]);
  //code for loading bar
  const a = () => {
    props.handleonClick2();
  };

  return (
    <nav className="navbar navbar-light navbar-expand-lg my-1 linear" style={{position:"fixed",top:"-5px",width:"100%",background: "linear-gradient(180deg,#e6ffe6,transparent)",zIndex:"20",fontSize:"20px"}}>
      <div className="container-fluid mx-4">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="btn-group">
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "20px",
            }}
            className=" "
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start my-4"
            style={{ backgroundColor: "#E4F1E8" }}
          >
            <li>
              <button
                className="dropdown-item"
                onClick={a}
                type="button"
                style={{ fontWeight: "500" }}
              >
                Digital Content and Devices
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={a} type="button">
              <i className="fa-regular fa-circle-question" style={{marginRight:"10px"}}></i>Questions
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={a} type="button">
              <i className="fa-solid fa-tags" style={{marginRight:"10px"}}></i>Tags
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={a} type="button">
              <i className="fa-solid fa-user" style={{marginRight:"10px"}}></i>Users
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={a} type="button">
                Companies
              </button>
            </li>
            <hr></hr>
            <li>
              <button
                className="dropdown-item"
                onClick={a}
                type="button"
                style={{ fontWeight: "500" }}
              >
                Programs & Features
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={a} type="button">
                Pay
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={a} type="button">
                <Link to="/market" style={{ textDecoration: "none", color: "black" }}>Live your market</Link>
              </button>
            </li>
            <hr></hr>
            <li>
              <button
                className="dropdown-item"
                onClick={a}
                type="button"
                style={{ fontWeight: "500" }}
              >
                Help & Settings
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={a} type="button">
                Your Account
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={a} type="button">
                Customer Service
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={a} type="button">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Sign In
                </Link>
              </button>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse mx-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item mx-4">
              <button style={{border:"none",backgroundColor:"transparent",display:`${disable}`}}>
                <Link
                    className={
                      location.pathname === "/home" ? "nav-link active" : "nav-link"
                    }
                    to="/home"
                    onClick={a}
                    style={{ fontWeight: "500" }}
                  >
                    Home
                  </Link>
                </button>
            </li>
            <li className="nav-item mx-4">
              <Link
                className={
                  location.pathname === "/about" ? "nav-link active" : "nav-link"
                }
                to="/about"
                onClick={a}
                style={{ fontWeight: "500" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                className={
                  location.pathname === "/services"
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to="/services"
                onClick={a}
                style={{ fontWeight: "500" }}
              >
                Services
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                className={
                  location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to="/"
                onClick={props.handleonClick2}
                style={{ fontWeight: "500", display:`${disable1}`}}
              >
                <i className="fa-solid fa-arrow-left"></i>
              </Link>
            </li>
          </ul>
          <div><i className="fa-solid fa-cloud" style={{marginRight:"10px"}}></i>{main}  {articles}°C</div>
          {!localStorage.getItem("token") ? (
            <>
              <Link
                className={
                  location.pathname === "/login"
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to="/Login"
                onClick={a}
                style={{ fontWeight: "500" ,marginLeft:"20px"}}
              >
                Login
              </Link>
              <Link
                className={
                  location.pathname === "/signup"
                    ? "nav-link active mx-4"
                    : "nav-link mx-4"
                }
                aria-current="page"
                to="/signup"
                onClick={a}
                style={{ fontWeight: "500" }}
              >
                SignUp
              </Link>
            </>
          ) : (
            <div>
              <Link
                className={
                  location.pathname === "/logout"
                    ? "nav-link active mx-4"
                    : "nav-link mx-4"
                }
                aria-current="page"
                to="/"
                onClick={logout}
                style={{ fontWeight: "500" }}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
