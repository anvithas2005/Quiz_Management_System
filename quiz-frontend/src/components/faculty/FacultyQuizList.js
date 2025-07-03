import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FacultyQuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const { authTokens } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchQuizzes = async () => {
    const res = await axios.get("http://localhost:8000/api/quizzes/", {
      headers: { Authorization: `Bearer ${authTokens.access}` },
    });
    setQuizzes(res.data); // Optional filter
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/quizzes/", {
      headers: { Authorization: `Bearer ${authTokens.access}` },
    }).then((res) => {
      setQuizzes(res.data); // <- no filter
    });
  }, []);
  

  const deleteQuiz = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this quiz?");
    if (!confirm) return;

    await axios.delete(`http://localhost:8000/api/quizzes/${id}/`, {
      headers: { Authorization: `Bearer ${authTokens.access}` },
    });

    alert("Quiz deleted.");
    fetchQuizzes(); // Refresh list
  };

  const editQuiz = (quiz) => {
    navigate(`/faculty/quiz/${quiz.id}/edit`, { state: quiz });
  };

  return (
    <div>
      <h2>📚 Manage Quizzes</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id} style={{ marginBottom: "10px" }}>
            <strong>{quiz.title}</strong><br />
            Time Limit: {quiz.time_limit} mins
            <br />
            <button onClick={() => editQuiz(quiz)}>✏️ Edit</button>{" "}
            <button onClick={() => deleteQuiz(quiz.id)}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyQuizList;
