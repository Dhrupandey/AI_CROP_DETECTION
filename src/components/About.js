import React from 'react'

export default function About() {
  return (
    <>
    <div style={{height:"640px",width:"100%",marginTop:"50px",overflowY:"scroll",scrollbarWidth:"0px"}}>
      <div className="" style={{width:"100%",height:"360px",backgroundColor:"grey",display:"flex"}}>
        <div className="" style={{width:"50%",height:"100%",backgroundColor:"black"}}><img src="/aboutimg1.png" alt="err" height="100%" width="100%"/></div>
        <div className="" style={{width:"50%",height:"100%",backgroundColor:"white",padding:"10px,10px,10px,10px"}}>
          <h2 style={{marginTop:"80px",textAlign:"center"}}>We are a team of passionate agricultural scientists</h2>
          <p style={{textAlign:"center",color:"black",fontFamily:"sans-serif",marginTop:"20px"}}>, AI engineers, and data analysts committed to transforming the agricultural industry through innovative technology. Our mission is to empower farmers and agricultural businesses with cutting-edge tools to improve crop health, increase yield, and promote sustainable farming practices.</p>
        </div>
      </div>
      <div className="" style={{width:"100%",height:"360px",backgroundColor:"grey",display:"flex"}}>
        <div className="" style={{width:"50%",height:"100%",backgroundColor:"white",padding:"10px,10px,10px,10px"}}>
          <h2 style={{marginTop:"80px",textAlign:"center"}}>Our AI-based Crop Disease Detection Management System</h2>
          <p style={{textAlign:"center",color:"black",fontFamily:"sans-serif",padding:"10px,10px,10px,10px",marginTop:"20px"}}> harnesses the power of machine learning and computer vision to identify crop diseases with high accuracy. By providing early warnings and actionable insights, we help farmers take timely action to mitigate risks and optimize their crop management strategies.
          </p>
        </div>
        <div className="" style={{width:"50%",height:"100%",backgroundColor:"black"}}><img src="/aboutimg2.jpg" alt="err" height="100%" width="100%"/></div>
      </div>
      <div className="" style={{width:"100%",height:"360px",backgroundColor:"grey",display:"flex"}}>
        <div className="" style={{width:"50%",height:"100%",backgroundColor:"black"}}><img src="/aboutimg3.jpg" alt="err" height="100%" width="100%"/></div>
        <div className="" style={{width:"50%",height:"100%",backgroundColor:"white",padding:"10px,10px,10px,10px"}}>
          <h2 style={{marginTop:"80px",textAlign:"center"}}>Our platform is user-friendly</h2>
          <p style={{textAlign:"center",color:"black",fontFamily:"sans-serif",padding:"10px,10px,10px,10px",marginTop:"40px"}}> , scalable, and designed to be accessible to everyone, from small-scale farmers to large agricultural enterprises. We believe that technology can revolutionize agriculture, and we are here to make that a reality.</p>
        </div>
        
      </div>
    </div>
    </>
    
  )
}
