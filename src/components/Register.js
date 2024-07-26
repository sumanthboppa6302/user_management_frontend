import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false); // State for redirection

  const onRegister = async () => {
    try {
      const response = await axios.post("http://localhost:4000/register", {
        username,
        password,
      });
      alert(response.data.message);
      setIsRegistered(true); // Set the redirection state
    } catch (err) {
      alert("Error");
    }
  };

  // If registration is successful, redirect to login page
  if (isRegistered) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Register</h1>
      <input
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onRegister}>Register</button>
    </div>
  );
}
