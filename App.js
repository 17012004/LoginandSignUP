import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./HomeScreen";
import Login from "./Login";
import Signup from "./SignUp";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from "./UserAuthContext";
import Welcome from "./Welcome";

function App() {
  return (
    // <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/login"
            element={
              // <ProtectedRoute>
                <Login />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              // <ProtectedRoute>
                <Signup />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              // <ProtectedRoute>
                <Home />
              // </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    /* </Router>*/
  );
}

export default App;
