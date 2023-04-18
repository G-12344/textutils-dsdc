import React, { useState } from "react";

export default function About() {

  const [style,setstyle]= useState({
      color:"black",
      backgroundColor:"white"
  })

  const handlestyle=() => {
    if(style.color==="white"){
      setstyle({color:"black",backgroundColor:"white"})
    }else{
      setstyle({color:"white",backgroundColor:"black"})
    }
  }

  return (
    <div>
        <div className="card mb-3"style={style}>
          <div className="card-body">
              <h1 className="card-title">About Us</h1>
              <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              {/* <P className="card-title"><small className="text muted">Last updated 2 min ago</small></P> */}
             
            <button className="btn btn-primary" onClick={handlestyle}>Enable Dark Mode</button>
          </div>
        </div>
    </div>
  )
}
 