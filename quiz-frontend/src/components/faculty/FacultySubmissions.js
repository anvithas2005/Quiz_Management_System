import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";

const FacultySubmissions = () => {
  const { authTokens } = useContext(AuthContext);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/submissions/", {
      headers: { Authorization: `Bearer ${authTokens.access}` },
    }).then(res => setSubmissions(res.data));
  }, []);

  const handleGrade = (answerId) => {
    const marks = prompt("Enter marks:");
    if (!marks) return;
    axios.patch(`http://localhost:8000/api/answers/${answerId}/`, {
      marks_awarded: marks,
    }, {
      headers: { Authorization: `Bearer ${authTokens.access}` },
    }).then(() => alert("Graded successfully!"));
  };

  return (
    <div>
      <h2>📥 Student Submissions</h2>
      {submissions.map(sub => (
        <div key={sub.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><strong>Student:</strong> {sub.student_username}</p>
          <p><strong>Quiz:</strong> {sub.quiz}</p>
          <p><strong>Score:</strong> {sub.score}</p>
          <p><strong>Submitted:</strong> {new Date(sub.submitted_at).toLocaleString()}</p>

          <ul>
            {sub.answers.map(ans => (
              <li key={ans.id}>
                <p>🧾 Q{ans.question}: <br /> ✍️ {ans.student_answer}</p>
                <p>Marks: {ans.marks_awarded ?? "Not graded"}</p>
                {ans.marks_awarded == null && (
                  <button onClick={() => handleGrade(ans.id)}>Grade</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FacultySubmissions;
