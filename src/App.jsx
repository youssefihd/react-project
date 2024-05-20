import React, { useState } from "react";
import Login from "./components/Login";
import Registration from "./components/registration";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const handleSignUpClick = () => {
    setShowLogin(false); // Show registration view
  };

  const handleSignInClick = () => {
    setShowLogin(true); // Show login view
  };

  return (
    <div className="app">
      {showLogin ? (
        <Login onSignUpClick={handleSignUpClick} />
      ) : (
        <Registration onSignInClick={handleSignInClick} /> // Pass handleSignInClick as a prop
      )}
    </div>
  );
}

export default App;
