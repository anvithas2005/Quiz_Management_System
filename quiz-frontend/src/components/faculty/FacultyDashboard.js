import React from "react";
import { Link } from "react-router-dom";

const FacultyDashboard = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>🧑‍🏫 Faculty Dashboard</h2>
      <ul>
        <li><Link to="/faculty/create-quiz">➕ Create Quiz</Link></li>
        <li><Link to="/faculty/submissions">📥 View & Grade Submissions</Link></li>
        <li><Link to="/faculty/quizzes">🛠 Manage Quizzes</Link></li>
        </ul>
    </div>
  );
};

export default FacultyDashboard;
