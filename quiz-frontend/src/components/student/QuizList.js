import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const { authTokens } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/quizzes/", {
      headers: { Authorization: `Bearer ${authTokens.access}` },
    }).then((res) => setQuizzes(res.data));
  }, []);

  return (
    <div>
      <h2>📋 Available Quizzes</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <strong>{quiz.title}</strong> - {quiz.description}
            <br />
            <button onClick={() => navigate(`/student/quiz/${quiz.id}`)}>Take Quiz</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
