
import React from "react";
import './../styles/App.css';
import {useState, useEffect} from "react"
const App = () => {
  const [data, setData]=useState(null);
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(err=>setData("An error occurred: "))
  },[])
  if(data==="Error") return <p>No data found</p>
  if(!data) return <h1>Loading...</h1>
  return (
    <div>
        {/* Do not remove the main div */}
      <h1>Data Fetched from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App
