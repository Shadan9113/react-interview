import React, { useState } from "react";

function App() {
  // Step 1: Set up a color state
  const [color, setColor] = useState("#ffffff");

  // Step 2: Create a function to generate a random color
  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Generate a hex color
    setColor(randomColor); // Update the color state
  };

  return (
    <div
      style={{
        backgroundColor: color, // Use the color state as background
        height: "100vh", // Full-screen height
        display: "flex", // Center content
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Random Color Generator</h1>
      <button
        onClick={generateRandomColor} // Call the function on button click
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Generate Color
      </button>
      <p style={{ marginTop: "20px" }}>Current Color: {color}</p>
    </div>
  );
}

export default App;
