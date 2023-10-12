import React from "react";
import { useState } from "react";
import styles from './Top.module.css'
import Output from "./Output";
import Map from './Map';
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
    <div className={styles.ccontainer}>
    <div className={styles.container}>
      <div className={styles.topImage}>
        <h1 className={styles.title}>IP Address Tracker</h1>
        <form onSubmit={(ev)=>submit(ev,ip,setData)}>
          <input
            className={styles.input}
            placeholder="search for any IP address or domain"
            onChange={(e)=>{setIP(e.target.value)}}
          ></input>
          <button className={styles.enter}  type='submit'>&gt;</button>
        </form>
      </div>
      <div className={styles.output}><Output ipinformation={data}/></div>
      </div>
      <div className={styles.map}><Map ipinformation={data}></Map></div>
    
    </div>
  );
};

export default Top;
