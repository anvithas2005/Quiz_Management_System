import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";

const StudentResults = () => {
  const { authTokens } = useContext(AuthContext);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/submissions/", {
      headers: { Authorization: `Bearer ${authTokens.access}` },
    }).then(res => setSubmissions(res.data));
  }, []);

  return (
    <div>
      <h2>📊 My Quiz Results</h2>
      <ul>
        {submissions.map((sub) => (
          <li key={sub.id}>
            <strong>{sub.quiz}</strong> <br />
            Score: {sub.score} <br />
            Submitted at: {new Date(sub.submitted_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentResults;
