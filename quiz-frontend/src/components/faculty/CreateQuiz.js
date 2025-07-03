import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const CreateQuiz = () => {
  const { authTokens } = useContext(AuthContext);
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState({
    title: "",
    description: "",
    time_limit: 10
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/quizzes/", quizData, {
        headers: { Authorization: `Bearer ${authTokens.access}` },
      });
      const quizId = res.data.id;
      alert("Quiz created!");
      navigate(`/faculty/quiz/${quizId}/add-question`);
    } catch (error) {
      console.error("Error creating quiz:", error.response.data);
      alert("Error: " + JSON.stringify(error.response.data));
    }
  };
  

  return (
    <div>
      <h2>➕ Create Quiz</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          onChange={(e) => setQuizData({ ...quizData, title: e.target.value })}
        /><br />
        <textarea
          placeholder="Description"
          onChange={(e) => setQuizData({ ...quizData, description: e.target.value })}
        /><br />
        <input
          type="number"
          placeholder="Time Limit (minutes)"
          value={quizData.time_limit}
          onChange={(e) => setQuizData({ ...quizData, time_limit: e.target.value })}
        /><br />
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
};

export default CreateQuiz;
