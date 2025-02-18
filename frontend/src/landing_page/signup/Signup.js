import React from "react";

const Signup = () => {
  const handleSignup = () => {
    window.location.href = "https://parthcapitaldashboard.onrender.com";
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
