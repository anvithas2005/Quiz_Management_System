import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";

const QuizAttempt = () => {
  const { quizId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const { authTokens } = useContext(AuthContext);

  useEffect(() => {
    axios.get("http://localhost:8000/api/questions/?quiz=" + quizId, {
      headers: { Authorization: `Bearer ${authTokens.access}` },
    }).then((res) => setQuestions(res.data));
  }, []);

  const handleChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = () => {
    const formattedAnswers = Object.entries(answers).map(([questionId, answer]) => ({
      question: parseInt(questionId),
      student_answer: answer,
    }));

    axios.post("http://localhost:8000/api/submissions/", {
        quiz: parseInt(quizId),
        answers: formattedAnswers,
      }, {
        headers: { Authorization: `Bearer ${authTokens.access}` },
      })
      .then(() => alert("✅ Quiz submitted!"))
      .catch((err) => {
        console.error(err.response.data);
        alert("❌ " + JSON.stringify(err.response.data));
      });
      
  };

  return (
    <div>
      <h2>📝 Take Quiz</h2>
      {questions.map((q) => (
        <div key={q.id}>
          <p><strong>{q.question_text}</strong></p>
          {q.question_type === "mcq" ? (
            q.options.map((opt) => (
              <label key={opt.id}>
                <input
                  type="radio"
                  name={q.id}
                  value={opt.text}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                /> {opt.text}
              </label>
            ))
          ) : (
            <textarea onChange={(e) => handleChange(q.id, e.target.value)} />
          )}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default QuizAttempt;
