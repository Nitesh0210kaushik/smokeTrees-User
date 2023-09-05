

import React, { useState } from "react";
import "../App.css";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [userName, setUserName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
        navigate('/')
    }
}, [])
  const handleSignup = async (e) => {
    e.preventDefault();

    const userData = {
      userName, 
      email,
      password,
    };

    try {
      let response = await fetch("http://localhost:8000/api/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("User registered successfully");

         response = await response.json();
        console.warn(response);
       
        localStorage.setItem("user", JSON.stringify(response)) 
        navigate('/')
      } else {
        console.error("Error registering user");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="signupform">
      <form onSubmit={handleSignup}>
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Enter your username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <small>We'll never share your email with anyone else.</small>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
