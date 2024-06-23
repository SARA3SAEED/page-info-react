import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Page2 from '../pages/page2';

export default function Page1() {

  let [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("gender", gender);
    localStorage.setItem("country", country);
    setSubmit(true);
  };

  return (
    !submit ? (
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
          <label className="block text-gray-700 mb-2">What is your gender?</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                value="male"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                className="mr-1"
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                className="mr-1"
                required
              />
              Female
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
            <option value="Qatar">Qatar</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>

      </form>
    ) : (
      <Page2
        name1={name}
        gender1={gender}
        country1={country}
        submit={setSubmit}
      />
    )
  );
}