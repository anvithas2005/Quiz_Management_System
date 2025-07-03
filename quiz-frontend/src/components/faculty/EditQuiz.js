import React, { useState, useContext, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";

const EditQuiz = () => {
  const { state } = useLocation(); // passed from navigate
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { authTokens } = useContext(AuthContext);

  const [form, setForm] = useState({
    title: "",
    description: "",
    time_limit: 0,
  });

  useEffect(() => {
    if (state) {
      setForm({
        title: state.title,
        description: state.description,
        time_limit: state.time_limit,
      });
    }
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/quizzes/${quizId}/`, form, {
      headers: { Authorization: `Bearer ${authTokens.access}` },
    });
    alert("Quiz updated.");
    navigate("/faculty/quizzes");
  };

  return (
    <div>
      <h2>✏️ Edit Quiz</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
        /><br />
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Description"
        /><br />
        <input
          type="number"
          value={form.time_limit}
          onChange={(e) => setForm({ ...form, time_limit: e.target.value })}
          placeholder="Time limit"
        /><br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditQuiz;
