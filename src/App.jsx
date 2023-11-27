import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import Admin from "./Admin";
import Roles from "./Roles";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="admin" element={<Admin />} />
          <Route path="roles" element={<Roles />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
