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

function App() {
const [ip,setIp]=useState('');

  return (
    <>
    {/* <form onSubmit={(ev)=>submit(ev,ip)}> <input  onChange={(e)=>{setIp(e.target.value)}} type="text" placeholder="8.8.8.8"></input><input type="submit"></input></form> */}
      
    </>
  );
}

export default App;
