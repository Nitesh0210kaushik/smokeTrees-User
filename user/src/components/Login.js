import React, { useState } from "react";
 import { useNavigate} from "react-router-dom"; 
 import { useEffect } from "react";

import "./Login.css";

function Login() {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
        navigate("/")
    }
}, [])

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      let response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Login successful");

         response = await response.json();
        console.warn(response); 
        
          localStorage.setItem('user', JSON.stringify(response.user));
          navigate("/")
      } else {
         alert("Please enter correct details")
      }
  
      
      
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
