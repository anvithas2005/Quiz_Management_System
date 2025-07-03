import React from "react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>👩‍🎓 Student Dashboard</h2>
      <ul>
        <li><Link to="/student/quizzes">📋 View Quizzes</Link></li>
        <li><Link to="/student/results">📊 View My Results</Link></li>
      </ul>
    </div>
  );
};

export default StudentDashboard;
