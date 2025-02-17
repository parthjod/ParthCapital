import React from "react";

const Signup = () => {
  const handleSignup = () => {
    window.location.href = "http://localhost:3001";
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
