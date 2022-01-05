import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import Sections from "./Sections";
import data from "./data.json";
import "./app.css";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setIsLoading] = useState(false);
  const [tourData, setTourData] = useState(data);
    return (
      <div id='main'>
        <h2>Our Tours</h2>
        {data.map((value)=>{
          console.log(value);
          return <Sections data={value}/>
        })}
        
      </div>)
  
}

export default App

