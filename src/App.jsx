
import Top from "./components/Top";
import Output from "./components/Output";
import './App.css';
import { useState } from "react";

function App() {
  const [ip,setIP]=useState('');

  return (
    <>
    {/* <form onSubmit={(ev)=>submit(ev,ip)}> <input  onChange={(e)=>{setIp(e.target.value)}} type="text" placeholder="8.8.8.8"></input><input type="submit"></input></form> */}
      <Top ip={ip} setIP={setIP}/>
     
    </>
  );
}

export default App;
