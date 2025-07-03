import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";

const AddQuestion = () => {
  const { quizId } = useParams();
  const { authTokens } = useContext(AuthContext);

  const [questionData, setQuestionData] = useState({
    question_text: "",
    question_type: "mcq",
    correct_answer: "",
  });

  const [options, setOptions] = useState(["", "", "", ""]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const questionRes = await axios.post("http://localhost:8000/api/questions/", {
      ...questionData,
      quiz: parseInt(quizId),
    }, {
      headers: { Authorization: `Bearer ${authTokens.access}` },
    });

    const questionId = questionRes.data.id;

    if (questionData.question_type === "mcq") {
      for (const opt of options) {
        await axios.post("http://localhost:8000/api/options/", {
          question: questionId,
          text: opt,
        }, {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        });
      }
    }

    alert("Question added!");
    setQuestionData({ question_text: "", question_type: "mcq", correct_answer: "" });
    setOptions(["", "", "", ""]);
  };

  return (
    <div>
      <h2>➕ Add Question</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Question"
          value={questionData.question_text}
          onChange={(e) => setQuestionData({ ...questionData, question_text: e.target.value })}
        /><br />

        <select
          value={questionData.question_type}
          onChange={(e) => setQuestionData({ ...questionData, question_type: e.target.value })}
        >
          <option value="mcq">Multiple Choice</option>
          <option value="subjective">Subjective</option>
        </select><br />

        {questionData.question_type === "mcq" && (
          <>
            {options.map((opt, idx) => (
              <div key={idx}>
                <input
                  placeholder={`Option ${idx + 1}`}
                  value={opt}
                  onChange={(e) => {
                    const newOpts = [...options];
                    newOpts[idx] = e.target.value;
                    setOptions(newOpts);
                  }}
                />
                <br />
              </div>
            ))}
          </>
        )}

        <input
          placeholder="Correct Answer"
          value={questionData.correct_answer}
          onChange={(e) => setQuestionData({ ...questionData, correct_answer: e.target.value })}
        /><br />

        <button type="submit">Add Question</button>
      </form>
    </div>
  );
};

export default AddQuestion;
