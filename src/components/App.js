import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Layout from "./Layout/layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";
import "./styles/App.css";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
