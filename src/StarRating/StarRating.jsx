import React, { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0); 

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Star Rating</h1>
      <div style={{ fontSize: "30px" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)} 
            onMouseEnter={() => setRating(star)} 
            onMouseLeave={() => setRating(rating)} 
            style={{
              cursor: "pointer",
              color: star <= rating ? "gold" : "gray", 
            }}
          >
            ★
          </span>
        ))}
      </div>
      <p>Your Rating: {rating} out of 5</p>
    </div>
  );
}

function App() {
  return <StarRating />;
}

export default App;
