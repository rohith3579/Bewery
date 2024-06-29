import React from "react";

import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: 'none'
};

export default function Home() {
  return (
    <div className="homepage-container"> 
    <h1>Bewery Review System</h1>

    
      <div className="content">
        <Link to='/register' style={linkStyle}>
          <button type='submit' className="btn btn-primary" style={{ color: "Black" , marginRight: '10px'}}>Register</button>
        </Link>
        
        <Link to='/login' style={linkStyle}>
          <button type='submit' className="btn btn-primary" style={{ color: "Black" }}>Login</button>
        </Link>

       
      </div>
      
    </div>
  )
}
