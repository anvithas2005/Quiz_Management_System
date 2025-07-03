import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/auth/users/", form);
    alert("Registered! Now login.");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" onChange={(e) => setForm({...form, username: e.target.value})} /><br/>
        <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} /><br/>
        <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})} /><br/>
        <select onChange={(e) => setForm({...form, role: e.target.value})}>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
        </select><br/>
        <button type="submit">Register</button>
      </form>
      <div style={{ marginTop: '10px' }}>
        <a href="/login">Already have an account? Login here.</a>
      </div>
    </div>
  );
};

export default Register;
