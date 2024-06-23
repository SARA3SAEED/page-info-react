import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function page2() {
    let [color , setColor] = useState("");
    let [size , setSize] = useState();



    let name= localStorage.getItem("name").toUpperCase();
     let gender= localStorage.getItem("gender").toUpperCase();
    let country= localStorage.getItem("country").toUpperCase();
    
    


  return (
    <>
     < form className="bg-white  p-6 mx-56 my-5 rounded shadow-md w-full max-w-lg" style={{ backgroundColor: "#ddd" }}>

    <label className="block text-gray-700 mb-2">Choose The Color:</label>
    <input
    value={color}
    type="color"
    onChange={(e)=>{setColor(e.target.value)}}
    className={`h-9 m-2 border-black  p-2 rounded `}/>

    <label className="block text-gray-700 mb-2">Enter The Size:</label>
    <input
        value={size}
        type="number"
        onChange={(e)=>{setSize(e.target.value)}}
        className={`h-9 border-black  p-2 rounded `}/>
    </form>


    <form  className="bg-white p-6 mx-56 my-5 rounded shadow-md w-full max-w-lg" style={{ backgroundColor: color }}>
        <h1 style={{ fontSize: `${size}px` }}>{name}</h1>
        <p style={{ fontSize: `${size}px` }}>{gender}</p>
        <p style={{ fontSize: `${size}px` }}>{country}</p>
        <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          ><Link to="/">  Back Page</Link></button>
    </form>
    </>
  )
}
