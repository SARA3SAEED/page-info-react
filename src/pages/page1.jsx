import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function page1() {

    let [name , setName] = useState("");
    const [gender, setgGender] = useState("");
    const [country, setCountry] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem("name",name)
      localStorage.setItem("gender",gender)
      localStorage.setItem("country",country)
    };
  
    return (
      <>
        <form onSubmit={handleSubmit} className="bg-white mx-80 my-14 p-6 rounded shadow-md w-full max-w-lg">
       <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
  
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">what your Gender?</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  onChange={(e) => setgGender(e.target.value)}
                  className="mr-1"
                  required
                />
                male
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  onChange={(e) => setgGender(e.target.value)}
                  className="mr-1"
                  required
                />
                female
              </label>
            </div>
          </div>
  
   
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">City:</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select a country</option>
              <option value="KSA">KSA</option>
              <option value="UAE">UAE</option>
              <option value="USA">USA</option>
              <option value="Japan">Japan</option>
              <option value="Qater">Qater</option>
            </select>
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          ><Link to="/page2">  Submit</Link></button>
          </form>
  
      </>
    )
  
}
