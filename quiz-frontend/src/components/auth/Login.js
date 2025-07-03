import React, { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await loginUser(username, password);
    if (success) {
      if (jwtDecode(localStorage.getItem("authTokens")).role === "faculty") {
        navigate("/faculty/dashboard");
      } else {
        navigate("/student/dashboard");
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" /><br />
        <button type="submit">Login</button>
      </form>
      <div style={{ marginTop: '10px' }}>
        <a href="/register"><button type="button">Don't have an account? Register here.</button></a>
      </div>
    </div>
  );
};

export default Login;
