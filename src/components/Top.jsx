import React from "react";
import "./Top.css";
import { useState } from "react";
import Output from "./Output";
function submit(ev,ip,setData){
  ev.preventDefault();
  const [input] = ev.target.children
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_wdHaXZyZnmvvZ7vT9y4GXi9wWtUIN&ipAddress=${ip}`
    )
      .then((Response) => {
        return Response.json();
      })
      .then((data)=>{setData(data)});
      console.log(ip);
  }

const Top = ({ip,setIP}) => {
  
  const [data, setData] = useState(null);
  return (
    <div className="container">
      <div className="topImage">
        <h1 className="title">IP Address Tracker</h1>
        <form onSubmit={(ev)=>submit(ev,ip,setData)}>
          <input
            className="input"
            placeholder="search for any IP address or domain"
            onChange={(e)=>{setIP(e.target.value)}}
          ></input>
          <button className="enter"  type='submit'>&gt;</button>
        </form>
      </div>
      <Output ipinformation={data}/>
    </div>
  );
};

export default Top;
