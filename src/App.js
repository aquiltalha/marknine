import React from "react";
import "./styles.css";
import { useState } from "react";
//database
const travelDB = {
  Delhi: [
    { name: "Red Fort", rating: "4/5" },
    { name: "India Gate", rating: "3.5/5" },
    { name: "Rashtrapati Bhawan", rating: "4/5" }
  ],
  Mumbai: [
    { name: "Nariman Point", rating: "3/5" },
    { name: "Church Gate", rating: "4/5" },
    { name: "Gateway of India", rating: "4/5" }
  ],
  Kolkata: [
    { name: "Victoria Memorial Hall", rating: "4/5" },
    { name: "Dakshineshwar Kali Temple", rating: "3.5/5" },
    { name: "Mother House", rating: "3/5" }
  ],
  Chennai: [
    { name: "Marina Beach", rating: "4/5" },
    { name: "Government Museum", rating: "4.5/5" },
    { name: "MGR Film City", rating: "3/5" }
  ],
  Bangalore: [
    { name: "Wonderla Amusement Park", rating: "4.5/5" },
    { name: "ISKCON Temple Bangalore", rating: "3/5" },
    { name: "Lalbagh Botanical Garden", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedCity, setSelectedCity] = useState("Delhi");
  function cityClickHandler(city) {
    setSelectedCity(city);
  }
  return (
    <div className="App">
      <h1>⛩️Travel recomendation</h1>
      <p style={{ fontSize: "smaller" }}>
        Check out my favourite places to vist in India.Select a city to get
        started!
      </p>
      <div>
        {Object.keys(travelDB).map((city) => (
          <button
            onClick={() => cityClickHandler(city)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  0.5rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
            id="btn"
          >
            {city}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul style={{ textAlign: "left" }}>
          {travelDB[selectedCity].map((spot) => (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{spot.name}</div>
              <div style={{ fontSize: "smaller" }}>{spot.rating}</div>
            </li>
          ))}
        </ul>
      </div>

      <h2></h2>
    </div>
  );
}
