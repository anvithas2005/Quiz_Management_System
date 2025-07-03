import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { AuthProvider } from "./contexts/AuthContext";
import StudentDashboard from "./components/student/StudentDashboard";
import FacultyDashboard from "./components/faculty/FacultyDashboard";
import QuizList from "./components/student/QuizList";
import QuizAttempt from "./components/student/QuizAttempt";
import CreateQuiz from "./components/faculty/CreateQuiz";
import AddQuestion from "./components/faculty/AddQuestion";
import StudentResults from "./components/student/StudentResults";
import FacultySubmissions from "./components/faculty/FacultySubmissions";
import FacultyQuizList from "./components/faculty/FacultyQuizList";
import EditQuiz from "./components/faculty/EditQuiz";





function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
              <h1>Welcome to the Quiz App</h1>
              <Link to="/login"><button>Login</button></Link>
              <Link to="/register"><button>Register</button></Link>
            </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
          <Route path="/student/quizzes" element={<QuizList />} />
          <Route path="/student/quiz/:quizId" element={<QuizAttempt />} />
          <Route path="/faculty/create-quiz" element={<CreateQuiz />} />
          <Route path="/faculty/quiz/:quizId/add-question" element={<AddQuestion />} />
          <Route path="/student/results" element={<StudentResults />} />
          <Route path="/faculty/submissions" element={<FacultySubmissions />} />
          <Route path="/faculty/quizzes" element={<FacultyQuizList />} />
          <Route path="/faculty/quiz/:quizId/edit" element={<EditQuiz />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
