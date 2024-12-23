import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate=useNavigate();
  const cameraonclick=()=>{
    navigate('/camerageter');
  }
  const onclick=()=>{
    navigate('/post');
  }
  return (
    <>
    <div style={{position:"absolute",top:"-5px",left:"-0px",zIndex:"-1",width:"100%"}}>
      <img className="mainimg" src="hello.jpg" alt="error" height="720px" width="100%" style={{opacity:"0.8"}}></img>
    </div>
    <div className='container camera' style={{height:"215px",width:"215px",display:"flex",justifyContent:"center",borderRadius:"50%",alignItems:"center",cursor:"pointer",marginTop:"250px",zIndex:"20",border:"4px solid white"}} onClick={cameraonclick}>
        <img src="camera12.jpg" alt="error" height="200px" width="200px" style={{borderRadius:"50%",zIndex:"20",border:"4px solid white"}}></img>
    </div>
    <div style={{height:"50px",width:"200px",marginLeft:"600px",marginTop:"160px",zIndex:"40",borderRadius:"8px"}} >
       <Link to="/post" style={{color:"black",fontSize:"20px",textDecoration:"none",backgroundColor:"white",opacity:"0.8",borderRadius:"8px",marginLeft:"20px"}}>Upload your image</Link> 
    </div>
    
    <div style={{marginLeft:"400px",height:"80px",width:"600px",position:"absolute",top:"120px",borderRadius:"10px",textAlign:"center",opacity:"0.9",textShadow:"12px -25px 20px 10px",zIndex:"20"}}><p style={{fontSize:"30px",fontFamily: "Georgia",zIndex:"20",backgroundColor:"#E4F1E8",color:"black",opacity:"0.7",borderRadius:"12px"}}>Capture your crop's image to get instant crop disease analysis</p></div>

    <div className="" style={{height:"500px",width:"50%",backgroundColor:"black",position:"absolute",top:"100px",borderRadius:"10px",left:"345px",opacity:"0.2",zIndex:"0"}}>
    </div>
    </>
  )
}

/*<div style={{position:"absolute",top:"-5px",right:"0px",zIndex:"-1"}}>
      <img src="backgroundimd2.jpg" alt="error" height="700px" width="700px" style={{opacity:"0.8"}}></img>
    </div>
*/
/*
    
*/
//<i className="fa-solid fa-arrow-trend-up" style={{marginLeft:"10px"}}></i>