import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false); // State for redirection

  const onLogin = async () => {
    try {
      const response = await axios.post("http://localhost:4000/login", {
        username,
        password,
      });
      alert("Login successfully", response.data);
      setIsLogin(true); // Set the redirection state
    } catch (err) {
      alert("Error");
    }
  };

  // If registration is successful, redirect to login page
  if (isLogin) {
    return <Navigate to="/user" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onLogin}>Login</button>
    </div>
  );
}
