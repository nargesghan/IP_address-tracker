import React from "react";
import "./Top.css";
import { useState } from "react";

function submit(ev,ip){
  ev.preventDefault();
  const [input] = ev.target.children
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_wdHaXZyZnmvvZ7vT9y4GXi9wWtUIN&ipAddress=${ip}`
    )
      .then((Response) => {
        return Response.json();
      })
      .then((data)=>console.log(data));
      console.log(ip);
  }

const Top = () => {
  const [ip,setIp]=useState('');

  return (
    <div className="container">
      <div className="topImage">
        <h1 className="title">IP Address Tracker</h1>
        <form onSubmit={(ev)=>submit(ev,ip)}>
          <input
            className="input"
            placeholder="search for any IP address or domain"
            onChange={(e)=>{setIp(e.target.value)}}
          ></input>
          <button className="enter">&gt;</button>
        </form>
      </div>
    </div>
  );
};

export default Top;
